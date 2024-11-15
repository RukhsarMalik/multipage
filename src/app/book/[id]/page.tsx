// pages/book/[id].tsx
"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

// Mock data (In a real application, fetch data from an API or database)


const books = [
  { id: 1, 
    title: "Peer-e-Kamil", 
    author: "Umera Ahmed", 
    description: "*“Peer-e-Kamil”* by Umera Ahmed is a standout work in Urdu literature, known for its depth beyond the usual romance novel. This book explores themes of faith, love, and self-discovery, leaving readers with a profound sense of reflection.\n The story follows two central characters: Salaar Sikandar and Imama Hashim. Salaar is a brilliant young man with a restless spirit, constantly questioning the meaning of life. In contrast, Imama comes from a stable, religious background and carries a quiet strength. Their lives intersect in an unexpected way, sparking an intense journey for both.\nAs the plot unfolds, Salaar undergoes a powerful transformation, shifting from internal conflict to finding inner peace. Imama, a devout and resilient woman, faces hardships due to her steadfast commitment to her beliefs.\nThis novel is far more than a love story; it’s a tale of spiritual awakening and profound change. Set against the varied landscapes of Islamabad, America, Paris, and Lahore, the story brings a unique, immersive feel to the journey of these characters.", 
    imageUrl: "/asserts/pictures/book1.jpg",
    pdfUrl: "/asserts/pdf/Peer e Kamil.pdf" },

  { id: 2, 
    title: "Jannat key Pattay", 
    author: "Nimra Ahmed",
    description: "Haya Suleman, an LLB (Hons) student, receives a scholarship to study in Turkey, but her plans take a dark turn when a private video of her surfaces online. Desperate to keep it from her traditional family, she contacts a Cyber Crime Cell officer who offers help—but he knows more about her than he should. \n As Haya navigates this mystery, she faces the challenge of removing the video, going to Turkey, and possibly meeting the one person she's been searching for. *Jannat Kay Pattay* (Leaves of Heaven) is a thrilling ride filled with secrets, surprises, and twists that will keep you guessing until the end.",
    imageUrl: "/asserts/pictures/book2.jpg" ,
    pdfUrl: "/asserts/pdf/jannat-kay-pattay.pdf"},
  { id: 3,
     title: "Halim",
      author: "Nimra Ahmed",
       description: "Haalim revolves around dream interpretation and the intriguing concept of time travel. Set primarily in Malaysia and the historical Malaka, the narrative intertwines the lives of its central characters – Fateh, Taalia, and Adam – against the backdrop of political maneuvers.Fateh is an aspiring politician, eager to change the political landscape of Malaysia, Taalia is a con artist with various identities, and Adam, a man struggling with self-esteem issues. These characters, despite their differences, share entwined storylines and evolve through their personal growth throughout the novel.",
      imageUrl: "/asserts/pictures/book3.png" ,
      pdfUrl: "/asserts/pdf/Haalim.pdf"},
  { id: 4,
     title: "Kara-koram Ka Taj Mahal",
      author: "Nimra Ahmed",
      description: "Beautifully written, this novel invites readers to fall in love with the majestic Karakoram, especially *The Karakoram Ka Taj Mahal*. It feels like a fairy tale where a prince comes searching for his long-awaited fairy. Yet, the story takes a tragic turn, with the deaths of Irsa, Ahmat, and others leaving a deep sense of sadness. Despite the sorrow, the narrative reflects the essence of life—its unpredictability and the unforeseen challenges that await us. The tragedies depicted may instill a sense of trepidation about conquering towering mountains, but the novel also brims with fascinating insights into the world of hiking. The ending beautifully encapsulates the unwavering passion of mountain-climbing enthusiasts, making it a poignant tribute to their spirit.",
      imageUrl: "/asserts/pictures/book4.jpg",
      pdfUrl: "/asserts/pdf/Karakoram ka taj mehal.pdf" },
  { id: 5,
     title: "Namal",
      author: "Nimra Ahmed",
      description: "The novel is named after a chapter in the Quran, Surah An-Naml, which means “The Ants”. The author has skillfully woven the verses and meanings of this surah into the plot and the characters of the novel. The novel revolves around a multiple murder case. Faris Ghazi, an intelligence officer, is accused of killing his step-brother, his wife, and attempting to kill his cousin Zumar Yusuf. However, his nephew Saadi Yusuf believes in his innocence and fights to prove it in court. On the other hand, Zumar, who is a district attorney and lost her kidneys in the attack, is convinced that Faris is guilty and wants him to pay for his crimes. Hashim Kardaar is the real culprit behind the murders. He is a corrupt lawyer and oil tycoon, and also happens to be Faris’sfirst cousin with a personal vendetta against him. Hashim and his mother Jawahirat become caught up in a complex web of conspiracies and deception. They manipulate reality and create misunderstandings among the characters.",
      imageUrl: "/asserts/pictures/book5.jpg",
      pdfUrl: "/asserts/pdf/Namal.pdf" },
  { id: 6,
     title: "Lahasil",
      author: "Umera Ahmed",
      description: "_Lahasil_ is a compelling story spanning two generations, centered around a woman from the streets of London. It explores the themes of human desires, lust, and greed, alongside love, contentment, and faith. The story follows Katherine, a call-girl in London, who crosses paths with Mazhar, a man from a respectable family who embodies strong Islamic values. Inspired by his character, Katherine converts to Islam, adopting the name Khadija Noor, and the two marry, eventually having a son named Zulayd. However, when Mazhar discovers Katherine’s past, he divorces her, taking their son with him. Both remarry — Mazhar in London, and Khadija, who moves to Pakistan, adopts a daughter, and rebuilds her life. Years later, their children, Mariam and Zulayd, meet and marry, but their journey is filled with unexpected twists and turns. _Lahasil_ is one of Umera Ahmed’s most brilliantly written novels, later adapted into a successful drama series that brought her widespread fame.",
      imageUrl: "/asserts/pictures/book6.jpg",
      pdfUrl: "/asserts/pdf/Lahasil.pdf" },
];

const BookDetail = () => {
  const params = useParams(); // `useParams` is a client-side hook
  const id = Array.isArray(params?.id) ? params.id[0] : params.id; // Ensure `id` is a string

  const book = books.find((book) => book.id === parseInt(id || '0', 10));

  
    if (!book) {
      return <p>Book not found</p>;
    }

    const handleReadOnline = () => {
      window.open(book.pdfUrl, '_blank', 'noopener,noreferrer');
    };
  
    const handleDownloadPDF = () => {
      const link = document.createElement('a');
      link.href = book.pdfUrl;
      link.download = `${book.title}.pdf`;
      link.click();
    };
  
  
    return (
      <section className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
        <Image src={book.imageUrl} alt={book.title} width={400} height={600} className="mx-auto rounded-md mb-4" />
        <p className="text-lg text-gray-600 mb-4">{book.description}</p>
        <p className="text-xl font-semibold text-gray-800">Author: {book.author}</p>
        
        {book.pdfUrl && (
        <div className="mt-6 space-x-4">
          {/* Read Online Button */}
          <button
            onClick={handleReadOnline}
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Read Online
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Download PDF
          </button>
        </div>
        )}
      </section>
    );
  };
  
  export default BookDetail;