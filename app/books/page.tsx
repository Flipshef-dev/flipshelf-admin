'use client'
import React from 'react'
import { Star } from 'lucide-react'
import { toast } from 'sonner'
import Header from '../components/Header/header';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    summary: 'A classic novel set in the Roaring Twenties.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    price: 12.99,
    rating: 4.5,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    summary: 'A story of racial injustice in the Deep South.',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80',
    price: 10.99,
    rating: 5,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    summary: 'A dystopian novel about totalitarianism, surveillance, and censorship.',
    image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=400&q=80',
    price: 9.99,
    rating: 4,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    summary: 'A romantic novel about manners and marriage.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    price: 11.99,
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Moby-Dick',
    author: 'Herman Melville',
    summary: 'The quest for the great white whale.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80',
    price: 13.99,
    rating: 3.5,
  },
];

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={i <= Math.floor(rating) ? "text-golden-400 stroke-amber-400" : "text-gray-300 dark:text-gray-600 "}
        fill={i <= rating ? "#facc15" : "none"}
      />
    );
  }
  return stars
}

export default function Books() {
  return (
    <>
      <Header title={"Books"} />
      <div>
        <div className="flex flex-wrap gap-5 p-6 "
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                backgroundImage: `url(${book.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'blur(3px)',
              }}
              className="bg-neutral-50 rounded-md dark:bg-neutral-800 shadow-neutral-400 dark:shadow-neutral-700 shadow-lg p-4 w-80 h-[28rem] flex flex-col hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 "
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm p-4 flex flex-col justify-between rounded-md">
              <div className='flex flex-col h-full justify-between' >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="font-medium text-lg text-center text-neutral-950 dark:text-neutral-50 mb-1">{book.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-200 mb-1 text-center">By {book.author}</p>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm text-center mb-2">{book.summary}</p>
                <div className="flex items-center justify-center mb-2">
                  {renderStars(book.rating)}
                  <span className="ml-2 text-sm text-neutral-700 dark:text-neutral-200">{book.rating}</span>
                </div>
              </div>
              <button
                className="mt-auto mb-2 px-4 py-2 text-neutral-50 dark:text-neutral-900 cursor-pointer rounded-lg hover:bg-neutral-900 dark:hover:bg-neutral-50 transition-all duration-200 bg-neutral-900 dark:bg-neutral-50"
                onClick={() =>
                  toast.success("Added Book to cart", {
                    description: `${book.title}`,
                  })}
              >
                Add to Cart
              </button>
              <div className="mt-auto text-center font-medium  text-neutral-900 dark:text-neutral-50 text-lg">{`${book.price}`}</div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}