import Head from "next/head"
import ProductCard from "../components/productcard"

export default function catalogue() {
  return (
    <>
        <Head>
            <title>Dinostoreus | Catalogue</title>
        </Head>
        <div className="h-fit w-full bg-gray-50">
            <section className="w-1/3 flex justify-center h-1/6">
                <div>
                    <h2 className="text-4xl font-semibold my-24">Catalogue</h2> 
                </div>
            </section>
            <section className="flex justify-center translate-y-12 pb-24">
                <div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 list-none'>
                    <ProductCard 
                        title="Apple Watch"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, tortor vitae condimentum dignissim, lacus leo mattis est, sit amet consectetur sapien turpis quis libero. Morbi feugiat bibendum posuere. Praesent ac sapien nisl. Suspendisse massa arcu, molestie at venenatis vel, consectetur non tellus. Etiam est odio, tincidunt id nisi ut, maximus gravida nulla. Donec a pretium purus, at rutrum dolor. Donec blandit sem at gravida congue. Cras nulla metus, auctor in massa vel, pulvinar porta turpis. Sed rutrum erat iaculis, volutpat odio quis, faucibus enim. Integer in est felis. Etiam."
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-watch-keychain-charger-0282-trevor-raab-1652370951.jpg"
                        price="$65"
                        />
                        <ProductCard 
                        title="Apple Watch"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, tortor vitae condimentum dignissim, lacus leo mattis est, sit amet consectetur sapien turpis quis libero. Morbi feugiat bibendum posuere. Praesent ac sapien nisl. Suspendisse massa arcu, molestie at venenatis vel, consectetur non tellus. Etiam est odio, tincidunt id nisi ut, maximus gravida nulla. Donec a pretium purus, at rutrum dolor. Donec blandit sem at gravida congue. Cras nulla metus, auctor in massa vel, pulvinar porta turpis. Sed rutrum erat iaculis, volutpat odio quis, faucibus enim. Integer in est felis. Etiam."
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-watch-keychain-charger-0282-trevor-raab-1652370951.jpg"
                        price="$65"
                        />
                        <ProductCard 
                        title="Apple Watch"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, tortor vitae condimentum dignissim, lacus leo mattis est, sit amet consectetur sapien turpis quis libero. Morbi feugiat bibendum posuere. Praesent ac sapien nisl. Suspendisse massa arcu, molestie at venenatis vel, consectetur non tellus. Etiam est odio, tincidunt id nisi ut, maximus gravida nulla. Donec a pretium purus, at rutrum dolor. Donec blandit sem at gravida congue. Cras nulla metus, auctor in massa vel, pulvinar porta turpis. Sed rutrum erat iaculis, volutpat odio quis, faucibus enim. Integer in est felis. Etiam."
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-watch-keychain-charger-0282-trevor-raab-1652370951.jpg"
                        price="$65"
                        />
                        <ProductCard 
                        title="Apple Watch"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, tortor vitae condimentum dignissim, lacus leo mattis est, sit amet consectetur sapien turpis quis libero. Morbi feugiat bibendum posuere. Praesent ac sapien nisl. Suspendisse massa arcu, molestie at venenatis vel, consectetur non tellus. Etiam est odio, tincidunt id nisi ut, maximus gravida nulla. Donec a pretium purus, at rutrum dolor. Donec blandit sem at gravida congue. Cras nulla metus, auctor in massa vel, pulvinar porta turpis. Sed rutrum erat iaculis, volutpat odio quis, faucibus enim. Integer in est felis. Etiam."
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-watch-keychain-charger-0282-trevor-raab-1652370951.jpg"
                        price="$65"
                        />
                        <ProductCard 
                        title="Apple Watch"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, tortor vitae condimentum dignissim, lacus leo mattis est, sit amet consectetur sapien turpis quis libero. Morbi feugiat bibendum posuere. Praesent ac sapien nisl. Suspendisse massa arcu, molestie at venenatis vel, consectetur non tellus. Etiam est odio, tincidunt id nisi ut, maximus gravida nulla. Donec a pretium purus, at rutrum dolor. Donec blandit sem at gravida congue. Cras nulla metus, auctor in massa vel, pulvinar porta turpis. Sed rutrum erat iaculis, volutpat odio quis, faucibus enim. Integer in est felis. Etiam."
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-watch-keychain-charger-0282-trevor-raab-1652370951.jpg"
                        price="$65"
                        />
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
