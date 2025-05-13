import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Video = {
  title: string;
  href: string;
  image: string;
  views: number;
  posted_at: string;
};

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Card className="lg:col-span-1 gap-0 md:col-span-2 col-span-4 group overflow-hidden p-0 hover:cursor-pointer">
      <Image
        className="w-full"
        src={video.image}
        width={300}
        height={100}
        alt={video.title}
      />
      <CardContent className="p-4 h-full flex flex-col justify-between">
        <h4 className="text-lg line-clamp-2">
          <Link href={video.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {video.title}
          </Link>
        </h4>
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            {video.views} Lượt xem
          </p>
          <p className="text-sm text-muted-foreground">{video.posted_at}</p>
        </div>
      </CardContent>
    </Card>
  );
}
