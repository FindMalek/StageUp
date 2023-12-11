import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    rating: 2,
    content: `
      <p>
        Je suis très déçu de ce stage. J'ai été mis de côté par l'équipe et je n'ai pas pu apprendre grand chose. Je ne recommande pas ce stage.
      </p>
    `,
    date: 'July 16, 2023',
    datetime: '2023-07-16',
    author: 'Hayfa Ben Nasser',
    avatarSrc:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>
        J'ai adoré ce stage. J'ai appris beaucoup de choses et j'ai pu travailler sur des projets intéressants.
      </p>
    `,
    date: 'July 12, 2023',
    datetime: '2023-07-12',
    author: 'Mohamed Amine Jguirim',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
  }
];

export default function InternReviews() {
  return (
    <div className="bg-white">
      <div>
        <h2 className="sr-only">Customer Reviews</h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <div
              key={review.id}
              className="flex space-x-4 text-sm text-gray-500"
            >
              <div className="flex-none py-10">
                <img
                  src={review.avatarSrc}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-100"
                />
              </div>
              <div
                className={cn(
                  reviewIdx === 0 ? '' : 'border-t border-gray-200',
                  'flex-1 py-10'
                )}
              >
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={cn(
                        review.rating > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  className="prose prose-sm mt-4 max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
