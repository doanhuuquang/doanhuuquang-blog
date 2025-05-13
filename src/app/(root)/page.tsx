import { CodeXml, TvMinimalPlay, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeDMarquee from "@/components/ui/3d-marquee";
import ProductCard from "@/components/OurComponents/ProductCard";
import VideoCard from "@/components/OurComponents/VideoCard";
import ContactForm from "@/components/OurComponents/ContactForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import products from "@/data/products";
import videos from "@/data/videos";

export default function Home() {
  const posts = [
    {
      title: "3D Card",
      description: "Hiệu ứng thẻ nổi 3D hấp dẫn và sinh động.",
      image: "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
      date: "2025-05-01",
    },
    {
      title: "Animated Modal",
      description: "Hộp thoại bật lên với hiệu ứng mượt mà.",
      image: "https://assets.aceternity.com/animated-modal.png",
      date: "2025-05-02",
    },
    {
      title: "Animated Testimonials",
      description: "Khung lời chứng thực có hoạt họa chuyển động.",
      image: "https://assets.aceternity.com/animated-testimonials.webp",
      date: "2025-05-03",
    },
    {
      title: "Tooltip",
      description: "Tooltip thiết kế hiện đại dễ sử dụng.",
      image: "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
      date: "2025-05-04",
    },
    {
      title: "GitHub Globe",
      description: "Mô phỏng quả địa cầu hoạt động GitHub.",
      image: "https://assets.aceternity.com/github-globe.png",
      date: "2025-05-05",
    },
    {
      title: "Glare Card",
      description: "Thẻ thông tin với hiệu ứng ánh sáng chói lóa.",
      image: "https://assets.aceternity.com/glare-card.png",
      date: "2025-05-06",
    },
    {
      title: "Layout Grid",
      description: "Bố cục dạng lưới linh hoạt và gọn gàng.",
      image: "https://assets.aceternity.com/layout-grid.png",
      date: "2025-05-07",
    },
    {
      title: "Flip Text",
      description: "Hiệu ứng chữ lật sáng tạo.",
      image: "https://assets.aceternity.com/flip-text.png",
      date: "2025-05-08",
    },
    {
      title: "Hero Highlight",
      description: "Tiêu đề bắt mắt cho phần đầu trang.",
      image: "https://assets.aceternity.com/hero-highlight.png",
      date: "2025-05-09",
    },
    {
      title: "Carousel",
      description: "Băng chuyền hiển thị hình ảnh hoặc nội dung.",
      image: "https://assets.aceternity.com/carousel.webp",
      date: "2025-05-10",
    },
    {
      title: "Vanish Input",
      description: "Input biến mất khi không sử dụng.",
      image: "https://assets.aceternity.com/placeholders-and-vanish-input.png",
      date: "2025-05-11",
    },
    {
      title: "Stars Background",
      description: "Nền hiệu ứng bầu trời sao lung linh.",
      image:
        "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
      date: "2025-05-12",
    },
    {
      title: "Signup Form",
      description: "Biểu mẫu đăng ký đẹp và dễ dùng.",
      image: "https://assets.aceternity.com/signup-form.png",
      date: "2025-05-13",
    },
    {
      title: "Stars Effect",
      description: "Hiệu ứng ánh sao chuyển động.",
      image: "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
      date: "2025-05-14",
    },
    {
      title: "Spotlight Effect",
      description: "Hiệu ứng chiếu sáng nổi bật phần tử.",
      image: "https://assets.aceternity.com/spotlight-new.webp",
      date: "2025-05-15",
    },
    {
      title: "Spotlight PNG",
      description: "Hình spotlight PNG có thể tái sử dụng.",
      image:
        "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
      date: "2025-05-16",
    },
    {
      title: "Parallax Scroll",
      description: "Cuộn trang với hiệu ứng thị sai ấn tượng.",
      image:
        "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
      date: "2025-05-17",
    },
    {
      title: "Tabs Component",
      description: "Thành phần Tabs linh hoạt chuyển nội dung.",
      image: "https://assets.aceternity.com/tabs.png",
      date: "2025-05-18",
    },
    {
      title: "Tracing Beam",
      description: "Hiệu ứng tia sáng di chuyển theo phần tử.",
      image:
        "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
      date: "2025-05-19",
    },
    {
      title: "Typewriter Effect",
      description: "Hiệu ứng gõ chữ như máy đánh chữ.",
      image:
        "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
      date: "2025-05-20",
    },
    {
      title: "Glowing Effect",
      description: "Phát sáng động cho phần tử nổi bật.",
      image: "https://assets.aceternity.com/glowing-effect.webp",
      date: "2025-05-21",
    },
    {
      title: "Hover Border Gradient",
      description: "Viền gradient chuyển màu khi hover.",
      image: "https://assets.aceternity.com/hover-border-gradient.png",
      date: "2025-05-22",
    },
    {
      title: "Infinite Cards",
      description: "Thẻ di chuyển vô hạn tạo hiệu ứng sinh động.",
      image:
        "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
      date: "2025-05-23",
    },
    {
      title: "Lamp Illustration",
      description: "Hình minh họa đèn sáng cho giao diện.",
      image: "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
      date: "2025-05-24",
    },
    {
      title: "MacBook Scroll",
      description: "Hiệu ứng cuộn trong khung MacBook giả lập.",
      image: "https://assets.aceternity.com/macbook-scroll.png",
      date: "2025-05-25",
    },
    {
      title: "Meteors",
      description: "Hiệu ứng sao băng di chuyển trong nền.",
      image: "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
      date: "2025-05-26",
    },
    {
      title: "Moving Border",
      description: "Viền động tạo hiệu ứng tương tác trực quan.",
      image:
        "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
      date: "2025-05-27",
    },
    {
      title: "Multi-step Loader",
      description: "Hiển thị quá trình tải nhiều bước.",
      image: "https://assets.aceternity.com/multi-step-loader.png",
      date: "2025-05-28",
    },
    {
      title: "Vortex Background",
      description: "Hiệu ứng xoáy đẹp mắt cho nền trang.",
      image: "https://assets.aceternity.com/vortex.png",
      date: "2025-05-29",
    },
    {
      title: "Wobble Card",
      description: "Thẻ dao động nhẹ nhàng khi hover.",
      image: "https://assets.aceternity.com/wobble-card.png",
      date: "2025-05-30",
    },
    {
      title: "World Map",
      description: "Bản đồ thế giới minh họa tương tác.",
      image: "https://assets.aceternity.com/world-map.webp",
      date: "2025-05-31",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1400px] m-auto xl:border-l-1 xl:border-r-1 border-dashed">
        {/* Banner */}
        <div className="lg:pt-0 pt-7">
          <div className="relative min-h-dvh">
            {/* Banner text */}
            <div className="lg:absolute lg:p-8 p-3 lg:mb-0 mb-20 z-10 h-full top-0 left-0 flex flex-col gap-10 lg:items-start lg:text-start text-center items-center justify-center w-full bg-linear-to-r from-background to-transparent">
              {/* Title */}
              <p className="lg:text-7xl lg:w-3/7 text-4xl font-extrabold leading-tight">
                Giải pháp <span className="text-primary">IT</span> cho ý tưởng
                của bạn
              </p>
              {/* Subtitle */}
              <p className="mt-4 text-lg lg:w-3/7 text-muted-foreground">
                Mình là Quang — lập trình viên đam mê xây dựng các giải pháp Web
                & App tùy chỉnh. Nếu bạn có một ý tưởng đang ấp ủ, mình sẽ giúp
                bạn hiện thực hóa nó bằng công nghệ phù hợp, hiệu quả và bền
                vững.
              </p>
              {/* Button */}
              <Button className="mt-6 w-fit text-base px-6 py-3">
                Liên hệ để cùng bắt đầu
              </Button>
            </div>
            {/* Post marquee */}
            <ThreeDMarquee posts={posts} className="min-h-dvh" />
          </div>
        </div>

        {/* Source code */}
        <div className="mb-20">
          {/* Title */}
          <div className="flex items-center py-5 justify-center gap-3 border-t-1 border-b-1 border-dashed">
            <CodeXml className="size-10" />
            <p className="uppercase text-3xl font-bold">SOURCE CODE</p>
          </div>

          {/* Sub title */}
          <p className="p-3 text-center text-muted-foreground">
            Mã nguồn đã được xây dựng sẵn với đầy đủ tính năng, dễ dàng mở rộng
            và phù hợp cho cả cá nhân lẫn đội ngũ phát triển.
          </p>

          {/* Grid card */}
          <div className="lg:p-8 p-3 grid grid-cols-4 gap-5">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {/* Watch more product button */}
          <div className="w-full flex justify-center">
            <Button variant={"link"} className="mx-auto text-accent-foreground">
              Khám phá thêm
            </Button>
          </div>
        </div>

        {/* Videos */}
        <div className="mb-20">
          {/* Title */}
          <div className="flex items-center py-5 justify-center gap-3 border-t-1 border-b-1 border-dashed">
            <TvMinimalPlay className="size-10" />
            <p className="uppercase text-3xl font-bold">VIDEOS</p>
          </div>

          {/* Sub title */}
          <p className="p-3 text-center text-muted-foreground">
            Chia sẻ kinh nghiệm lập trình và cuộc sống thường nhật của một lập
            trình viên qua những video chân thực.
          </p>

          {/* Grid card */}
          <div className="lg:p-8 p-3 grid grid-cols-4 gap-5">
            {videos.map((videos, index) => (
              <VideoCard key={index} video={videos} />
            ))}
          </div>

          {/* Watch more product button */}
          <div className="w-full flex justify-center">
            <Button variant={"link"} className="mx-auto text-accent-foreground">
              Khám phá thêm
            </Button>
          </div>
        </div>

        {/* Blog */}
        <div className="mb-20">
          {/* Title */}
          <div className="flex items-center py-5 justify-center gap-3 border-t-1 border-b-1 border-dashed">
            <Rss className="size-10" />
            <p className="uppercase text-3xl font-bold">BLOG</p>
          </div>

          {/* Sub title */}
          <p className="p-3 text-center text-muted-foreground">
            Khám phá những bài viết chia sẻ kiến thức, kinh nghiệm và góc nhìn
            cá nhân trên blog của mình.
          </p>

          {/* Carousel card */}
          <div className="lg:p-8 p-3">
            <Carousel className="w-full">
              <CarouselContent>
                {videos.map((videos, index) => (
                  <CarouselItem key={index}>
                    <VideoCard key={index} video={videos} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Watch more product button */}
          <div className="w-full flex justify-center">
            <Button variant={"link"} className="mx-auto text-accent-foreground">
              Khám phá thêm
            </Button>
          </div>
        </div>

        {/* Báo giá */}
        <div className="mb-20 lg:p-8 p-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
