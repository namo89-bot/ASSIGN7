import Image from "next/image";
export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
    const { vid } = await params;

    const venueDetail = new Map([
        ['001', { name: 'The Bloom Pavilion', src: '/img/bloom.jpg' }],
        ['002', { name: 'Spark Space', src: '/img/sparkspace.jpg' }],
        ['003', { name: 'The Grand Table', src: '/img/grandtable.jpg' }],
    ]);

    const targetVenue = venueDetail.get(vid);

    if (!targetVenue) return <div className="p-10 text-center">Venue not found</div>;

    return (
        <main className="p-20 text-center">
            <h1 className="text-2xl font-bold mb-5">Venue Id {vid}</h1>
            <div className="flex justify-start items-start">
                <Image 
                    src={targetVenue.src} 
                    alt={targetVenue.name} 
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[50%] h-auto"
                />
                <div className="text-center mx-10">
                    <div className="text-xl font-medium">
                        {targetVenue.name}
                    </div>
                </div>
            </div>
        </main>
    );
}