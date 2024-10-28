import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const formatDateWithTime = (date: Date | string) => {
  const parsedDate = new Date(date)
  return parsedDate.toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const exampleMessages = [
  {
    heading: '生成AIの近年の動向について',
    message: '生成AIの近年の動向について',
    image:
      'https://thumb.photo-ac.com/3f/3f24b8b3c90e4f19f10009849cc208b8_t.jpeg',
    cache: '/search/GJF42BR',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: '生成AIのモデル比較と選定ガイド',
    message: '生成AIのモデル比較と選定ガイド',
    image:
      'https://thumb.photo-ac.com/9c/9ca4b003957fbe74c00f143baa40965b_t.jpeg',
    cache: '/search/kRtMPjI',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'Node.jsとAIライブラリの統合方法',
    message: 'Node.jsとAIライブラリの統合方法',
    image:
      'https://thumb.photo-ac.com/a1/a1aa3ae637da72b8c6fbbf7a816cd3bf_t.jpeg',
    cache: '/search/2QzRepf',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'マルチエージェントシステムの社会的インパクト',
    message: 'マルチエージェントシステムの社会的インパクト',
    image:
      'https://thumb.photo-ac.com/bf/bf1727e44eed360e1b775c4962ad8c7b_t.jpeg',
    cache: '/search/fpRkOjA',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'Small Language Modelの需要',
    message: 'Small Language Modelの需要',
    image:
      'https://thumb.photo-ac.com/e8/e83b058d49c63503c7ecde6450f6b614_t.jpeg',
    cache: '/search/7t8bnT7',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'マルチエージェントによる意思決定支援システム',
    message: 'マルチエージェントによる意思決定支援システム',
    image:
      'https://thumb.photo-ac.com/62/62f5b64470e49fc681438a491e61fd19_t.jpeg',
    cache: '/search/xLoGtfX',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'GensparkAIの使い方',
    message: 'GensparkAIの使い方',
    image:
      'https://thumb.photo-ac.com/ac/acc32bfb88a13735a4aea0efc4b96b5c_t.jpeg',
    cache: '/search/d1sb1dw',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'What is JAX? Pytorchからの乗り換え方法',
    message: 'What is JAX? Pytorchからの乗り換え方法',
    image:
      'https://thumb.photo-ac.com/9b/9bed6ae96cd182ad9cb8ac456dae1151_t.jpeg',
    cache: '/search/8hGjWHI',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'Attention is All You Needの解説',
    message: 'Attention is All You Needの解説',
    image:
      'https://thumb.photo-ac.com/82/82333f3393ff360f4da366b559c0ae67_t.jpeg',
    cache: '/search/GmcKQpA',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: '生成AIをビジネスに利用するアイディア',
    message: '生成AIをビジネスに利用するアイディア',
    image:
      'https://thumb.photo-ac.com/11/1170fb365834311de4522086f615155e_t.jpeg',
    cache: '/search/2q8RahJ',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'Tailwindcss VS CSS module',
    message: 'Tailwindcss VS CSS module',
    image:
      'https://thumb.photo-ac.com/30/30d174eb0ec5ba8c92106aac193945fb_t.jpeg',
    cache: '/search/nX1jnYg',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  },
  {
    heading: 'Teslaの人型ロボットについて',
    message: 'Teslaの人型ロボットについて',
    image:
      'https://thumb.photo-ac.com/19/196167bb536b691bacc9078519e015b7_t.jpeg',
    cache: '/search/eyQe1mv',
    createdAt: '2024-10-30',
    tags: ['AI', 'tech']
  }
]
type BlogCarousel = {
  heading: string
  message: string
  image: string
  cache: string
  isNew?: boolean
  createdAt: string
  tags: string[] // 追加
}

export function BlogCarousel() {
  const [selectedMessage, setSelectedMessage] = useState<BlogCarousel | null>(
    null
  )

  const onClickCard = (message: BlogCarousel) => {
    setSelectedMessage(message)
  }

  const closePopup = () => setSelectedMessage(null)

  return (
    <div>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {exampleMessages.map((message, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
              <Card
                key={index}
                className="relative h-96 cursor-pointer hover:shadow-lg transition-all duration-200 overflow-hidden group"
                onClick={() => onClickCard(message)}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative">
                    <Image
                      className="w-full h-48 object-cover transition-transform duration-200"
                      width={512}
                      height={512}
                      src={message.image}
                      alt="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold line-clamp-2 group-hover:text-blue-500 transition-colors">
                      {message.heading}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {message.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs border border-red-600 rounded-full bg-background/40 text-red-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mt-auto">
                      {formatDateWithTime(message.createdAt)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext variant="ghost" />
        <CarouselPrevious variant="ghost" />
      </Carousel>

      {selectedMessage && (
        <>
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-80 z-40"
            onClick={closePopup}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center z-50">
            <Card className="relative p-4 w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-[82rem] h-11/12 sm:h-2/5">
              <CardContent className="p-3">
                <Image
                  className="w-full h-80 object-cover"
                  width={1024}
                  height={1024}
                  src={selectedMessage.image}
                  alt="image"
                />
                <div className="p-8">
                  <Link
                    href={selectedMessage.cache}
                    className="text-2xl sm:text-4xl font-bold"
                  >
                    <div>{selectedMessage.heading}</div>
                  </Link>
                  <div className="mt-4 px-4 border-l-4 border-red-600">
                    <span className="text-red-600 font-bold">TLDR </span>
                    ここに要約が入ります。サンプルとして以下の情報を含みます：
                    <br />
                    - 重要なポイント1
                    <br />
                    - 重要なポイント2
                    <br />
                    - 重要なポイント3
                    <br />
                    これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <Button
                      variant="default"
                      size="default"
                      onClick={closePopup}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
