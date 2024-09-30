"use client"
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import { useQuoteQuery } from "@/query/queryHandler";
import { API_ENDPOINT } from "@/utils/constants/query";
import Link from "next/link";
import React, { useEffect } from "react";

const QuoteList = () => {

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
  } = useQuoteQuery()

  useEffect(() => {
    const onScroll = (e) => {
      const {
        scrollHeight,
        scrollTop,
        clientHeight
      } = e.target.scrollingElement

      if (scrollHeight - scrollTop <= clientHeight) {
        fetchNextPage(API_ENDPOINT.QUOTE.GET_ALL.KEY)
      }
    }

    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="p-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(data && data.pages.length) && data.pages.map((page, pageIndex) => (
            <React.Fragment key={`quote-page-${pageIndex}`}>
              {page.data.map((quote, index) => {
                return (
                  <QuoteCard key={`quote-${index}`} quote={quote} />
                );
              })}
            </React.Fragment>
          ))}

        </div>
        {isFetchingNextPage && (
          <p className="text-center  mx-auto text-gray-500 mt-4">Loading more quotes...</p>
        )}
      </main>

      <Footer />

      {/* Floating Action Button */}
      <Link href="/postQuote" className="flex justify-center items-center fixed bottom-10 right-10 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring">
        <i className="fas fa-plus"></i>
      </Link>
    </div>
  );
};

export default QuoteList;
