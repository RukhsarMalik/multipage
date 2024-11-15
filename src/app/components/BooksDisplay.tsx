// components/BooksDisplay.tsx
import Link from 'next/link';
import Image from 'next/image';


const books = [
  { id: 1, title: "Peer-e-Kamil", author: "Umera Ahmed", imageUrl: "/asserts/pictures/book1.jpg" },
  { id: 2, title: "Jannat key Pattay", author: "Nimra Ahmed", imageUrl: "/asserts/pictures/book2.jpg" },
  { id: 3, title: "Halim", author: "Nimra Ahmed", imageUrl: "/asserts/pictures/book3.png" },
  { id: 4, title: "Kara-koram Ka Taj Mahal", author: "Nimra Ahmed", imageUrl: "/asserts/pictures/book4.jpg" },
  { id: 5, title: "Namal", author: "Nimra Ahmed", imageUrl: "/asserts/pictures/book5.jpg" },
  { id: 6, title: "Lahasil", author: "Umera Ahmed", imageUrl: "/asserts/pictures/book6.jpg" },
];

const BooksDisplay = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Books</h2>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
              <Link  href={`/book/${book.id}`}>
                <div>
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    width={300}
                    height={300}
                    className="w-full h-[300px] object-contain rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
                  <p className="text-gray-600">{book.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksDisplay;
