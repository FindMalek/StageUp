import Image from 'next/image';
import Link from 'next/link';

import { InternshipType } from '@/types/internship';

import { StarRatingCustom } from '@/components/ui/StarRating';

export default function InternshipCard({
  internship
}: {
  internship: InternshipType;
}) {
  return (
    <>
      <div
        key={internship.id}
        className="mb-4 border-b border-l border-r border-t border-gray-300 bg-white shadow-sm sm:rounded-lg sm:border"
      >
        <Link href={`/internships/${internship.id}`}>
          <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
            <div className="sm:flex lg:col-span-9">
              <div className="aspect-h-1 aspect-w-1 sm:aspect-none w-full flex-shrink-0 overflow-hidden rounded-lg sm:h-40 sm:w-40">
                <Image
                  /* src={
                  internship.enterprise.imageUrl ||
                  '/placeholders/internship/placeholder.webp'
                } */
                  src="/placeholders/internship/placeholder.webp"
                  alt={internship.enterprise.companyName}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>

              <div className="mt-6 sm:ml-6 sm:mt-0">
                <h3 className="text-lg font-medium text-gray-900">
                  {internship.positionTitle} -{' '}
                  {internship.enterprise.companyName}
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-900">
                  {internship.location}
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  {internship.description}
                </p>
              </div>
            </div>

            <div className="mt-6 lg:col-span-3 lg:mt-0">
              <div>
                <dt className="font-medium text-gray-900">Durée du stage</dt>
                <dd className="mt-3 text-gray-500">{internship.duration}</dd>
              </div>
              <div className="mt-6">
                <dt className="font-medium text-gray-900">Feedbacks</dt>
                <dd className="mt-3 text-gray-500">
                  <StarRatingCustom
                    totalStars={5}
                    selectedStars={
                      internship.feedbacks.reduce((acc, feedback) => {
                        return (acc += feedback.rating ? feedback.rating : 0);
                      }, 0) / internship.feedbacks.length
                    }
                  />
                </dd>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
