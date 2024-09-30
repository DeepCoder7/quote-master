import { formatDate } from '@/utils/utils';
import React from 'react'

const QuoteCard = ({
    quote
}) => {
    return (
        <div
            className="relative group bg-green-900 rounded-lg overflow-hidden"
        >
            <img
                src={quote.mediaUrl}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/200';
                }}
                alt={quote.text}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute text-white bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                <blockquote className="text-lg italic mb-2">
                    "{quote.text}"
                </blockquote>
                {quote?.username ? <p className="text-sm">
                    - {quote.username}, {formatDate(quote.createdAt)}
                </p> : null}
            </div>
        </div>
    )
}

export default QuoteCard