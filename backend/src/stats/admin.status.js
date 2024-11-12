const mongoose = require('mongoose');
const express = require('express');
const Order = require('../orders/order.model');
const Book = require('../books/book.model');
const router = express.Router();


// Function to calculate admin stats
router.get("/", async (req, res) => {
    try {
        // 1. Total number of orders
        const totalOrders = await Order.countDocuments();  //countDocuments() to count all documents( document refers to a single instance of data in a collection,)
                                                             // in the Order collection, which represents the total number of orders.

        // 2. Total sales (sum of all totalPrice from orders)
        const totalSales = await Order.aggregate([  //neeche
            {
                $group: {
                    _id: null,  //_id: null groups all documents into a single result,
                    totalSales: { $sum: "$totalPrice" },
                }
            }
        ]);

        // 4. Trending books statistics: 
        const trendingBooksCount = await Book.aggregate([
            { $match: { trending: true } },  // Match only trending books
            { $count: "trendingBooksCount" }  // Return the count of trending books
        ]);
        
        // If you want just the count as a number, you can extract it like this:
        const trendingBooks = trendingBooksCount.length > 0 ? trendingBooksCount[0].trendingBooksCount : 0;

        // 5. Total number of books
        const totalBooks = await Book.countDocuments();

        // 6. Monthly sales (group by month and sum total sales for each month)
        const monthlySales = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },  // Group by year and month
                    totalSales: { $sum: "$totalPrice" },  // Sum totalPrice for each month
                    totalOrders: { $sum: 1 }  // Count total orders for each month
                }
            },
            { $sort: { _id: 1 } }  
        ]);

        // Result summary
        res.status(200).json({  totalOrders,
            totalSales: totalSales[0]?.totalSales || 0,
            trendingBooks,
            totalBooks,
            monthlySales, });
      
    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ message: "Failed to fetch admin stats" });
    }
})

module.exports = router;


//aggregation refers to the process of performing operations on MongoDB collections
/// to process and transform data, typically to perform complex queries or compute summary information
// like totals, averages, groupings, or sorting.
//The aggregation framework in MongoDB allows for the combination of multiple stages that transform the data step by step.
//Mongoose provides the .aggregate() method to interact with MongoDB's aggregation pipeline.
// Stages: Each stage performs a specific operation like filtering, grouping, sorting, etc. Common stages include:
// $match: Filters documents.
// $group: Groups documents by a specified key.
// $sort: Sorts documents.
// $project: Modifies the fields of documents.
// $limit: Limits the number of documents.
// $skip: Skips a certain number of documents


// {
//     $group: {
//       _id: null,
//       totalSales: { $sum: "$totalPrice" }
//     }
//   }

// In the $group stage, the _id field is used to specify how documents should be grouped.
// Setting _id: null means you’re not grouping by any specific field. Instead, you're essentially grouping all documents together as one group.
//$sum is an aggregation operator that adds up the values of a given field across all documents in the group
//$totalPrice" is a reference to the field totalPrice in the documents.  

// {
//     $group: {
//         _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
//         totalSales: { $sum: "$totalPrice" },
//         totalOrders: { $sum: 1 }
//     }
// }

// _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }:

// This part groups the orders based on the month and year in which they were created (createdAt field).
// $dateToString is a MongoDB operator that converts a date to a string formatted according to the given format.
// "%Y-%m" specifies the format, which extracts the year and month (e.g., "2024-11" for November 2024).
// This will group all the orders by month, so every document in the result represents a specific month.
// The _id will be the formatted string, such as "2024-11", "2024-12", and so on.
//{ $sum: 1 }
//we are telling MongoDB to add 1 for each document that passes through the aggregation pipeline.
//Why Use $sum: 1?
// Using { $sum: 1 } is a clever shortcut for counting documents in a group. Here's how:

// $sum: 1 will add 1 for each document in the group, effectively counting the number of documents in that group.
// The value 1 here doesn't refer to any field in the document, but rather a literal value, so each document in the group gets counted as 1.
