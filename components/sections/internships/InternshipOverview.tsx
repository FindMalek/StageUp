import Link from 'next/link';
import Image from 'next/image';

import { InternshipType } from '@/types/internship';

import { Button } from '@/components/ui/Button';
import { StarRatingCustom } from '@/components/ui/StarRating';
import InternReviews from '@/components/sections/internships/InternReviews';

import { Clock, Wallet } from 'lucide-react';

const policies = [
  {
    name: 'Gagnez du temps',
    icon: Clock,
    description: 'Nous nous occupons de tout'
  },
  {
    name: 'Pas de frais cachés',
    icon: Wallet,
    description: "Vous ne payez rien, c'est gratuit!"
  }
];

export default function InternshipOverview({ internship }: { internship: InternshipType }) {
  return (
    <div className="rounded-lg bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <ol role="list" className="flex items-center space-x-4">
            <li key={internship.id}>
              <div className="flex items-center">
                <span className="mr-4 text-sm font-medium text-gray-900">
                  Stages
                </span>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <Link
                href={`/profile/${internship.enterpriseId}`}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {internship.enterprise.companyName}
              </Link>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {internship.positionTitle}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {internship.duration
                    .split(' ')
                    .map((word) => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    })
                    .join(' ')}
                </p>
              </div>

              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <StarRatingCustom
                      totalStars={5}
                      selectedStars={
                        internship.feedbacks.reduce((acc, feedback) => {
                          return (acc += feedback.rating ? feedback.rating : 0);
                        }, 0) / internship.feedbacks.length
                      }
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <Link
                      href="#feedbacks"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      Voir tous les {internship.feedbacks.length} reviews
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <Image
                  key={internship.id}
                  /* src={internship.enterprise.imageUrl} */
                  src="/placeholders/internship/placeholder.webp"
                  alt={internship.positionTitle}
                  height={400}
                  width={400}
                  className={'rounded-lg lg:col-span-2 lg:row-span-2'}
                />
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: internship.description }}
                />
              </div>
              <form>
                <Link href={`/internships/${internship.id}/apply`}>
                  <Button className="mt-8 flex w-full items-center justify-center ">
                    Postuler au stage
                  </Button>
                </Link>

                <Link href={internship.documentationFileUrl} target="_blank">
                  <Button
                    variant="outline"
                    className="mt-1 flex w-full items-center justify-center"
                  >
                    Voir la ficher de documentation
                  </Button>
                </Link>
              </form>
              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
          <InternReviews />
        </div>
      </div>
    </div>
  );
}
