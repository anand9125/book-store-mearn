import React, { useEffect, useState } from 'react';
import BooksCard from './BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const categories = ["Choose a genre", "Fiction", "Horror", "Adventure", "Business"];

function Topseller() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books data:", error));
  }, []);

  // Filter books based on selected category
  const filteredBooks = selectedCategory === "Choose a genre"
    ? books
    : books.filter(book => book.category === selectedCategory.toLowerCase());

  return (
    <div>
      <div>
      
        <h2 className='text-2xl font-semibold m-6'>Top Seller</h2>
      </div>
      <div className='m-6 '>
        
        {/* Category Filtering */}
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className='border-gray-200 bg-gray-200 rounded p-1'
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        
        {/* Swiper for displaying books */}
        <div className='pt-6'>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 2, spaceBetween: 50 },
              1180: { slidesPerView: 3, spaceBetween: 50 },
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <SwiperSlide key={index}>
                  <BooksCard book={book} />
                </SwiperSlide>
              ))
            ) : (
              <p>No books found</p>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Topseller;