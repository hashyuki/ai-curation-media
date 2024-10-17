import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { useState } from 'react'

const exampleMessages = [
  {
    heading: '生成AIの近年の動向について',
    message: '生成AIの近年の動向について',
    image:
      'https://thumb.photo-ac.com/3f/3f24b8b3c90e4f19f10009849cc208b8_t.jpeg',
    cache: '/search/GJF42BR'
  },
  {
    heading: '生成AIのモデル比較と選定ガイド',
    message: '生成AIのモデル比較と選定ガイド',
    image:
      'https://thumb.photo-ac.com/9c/9ca4b003957fbe74c00f143baa40965b_t.jpeg',
    cache: '/search/kRtMPjI'
  },
  {
    heading: 'Node.jsとAIライブラリの統合方法',
    message: 'Node.jsとAIライブラリの統合方法',
    image:
      'https://thumb.photo-ac.com/a1/a1aa3ae637da72b8c6fbbf7a816cd3bf_t.jpeg',
    cache: '/search/2QzRepf'
  },
  {
    heading: 'マルチエージェントシステムの社会的インパクト',
    message: 'マルチエージェントシステムの社会的インパクト',
    image:
      'https://thumb.photo-ac.com/bf/bf1727e44eed360e1b775c4962ad8c7b_t.jpeg',
    cache: '/search/fpRkOjA'
  },
  {
    heading: 'Small Language Modelの需要',
    message: 'Small Language Modelの需要',
    image:
      'https://thumb.photo-ac.com/e8/e83b058d49c63503c7ecde6450f6b614_t.jpeg',
    cache: '/search/7t8bnT7'
  },
  {
    heading: 'マルチエージェントによる意思決定支援システム',
    message: 'マルチエージェントによる意思決定支援システム',
    image:
      'https://thumb.photo-ac.com/62/62f5b64470e49fc681438a491e61fd19_t.jpeg',
    cache: '/search/xLoGtfX'
  },
  {
    heading: 'GensparkAIの使い方',
    message: 'GensparkAIの使い方',
    image:
      'https://thumb.photo-ac.com/ac/acc32bfb88a13735a4aea0efc4b96b5c_t.jpeg',
    cache: '/search/d1sb1dw'
  },
  {
    heading: 'What is JAX? Pytorchからの乗り換え方法',
    message: 'What is JAX? Pytorchからの乗り換え方法',
    image:
      'https://thumb.photo-ac.com/9b/9bed6ae96cd182ad9cb8ac456dae1151_t.jpeg',
    cache: '/search/8hGjWHI'
  },
  {
    heading: 'Attention is All You Needの解説',
    message: 'Attention is All You Needの解説',
    image:
      'https://thumb.photo-ac.com/82/82333f3393ff360f4da366b559c0ae67_t.jpeg',
    cache: '/search/GmcKQpA'
  },
  {
    heading: '生成AIをビジネスに利用するアイディア',
    message: '生成AIをビジネスに利用するアイディア',
    image:
      'https://thumb.photo-ac.com/11/1170fb365834311de4522086f615155e_t.jpeg',
    cache: '/search/2q8RahJ'
  },
  {
    heading: 'Tailwindcss VS CSS module',
    message: 'Tailwindcss VS CSS module',
    image:
      'https://thumb.photo-ac.com/30/30d174eb0ec5ba8c92106aac193945fb_t.jpeg',
    cache: '/search/nX1jnYg'
  },
  {
    heading: 'Teslaの人型ロボットについて',
    message: 'Teslaの人型ロボットについて',
    image:
      'https://thumb.photo-ac.com/19/196167bb536b691bacc9078519e015b7_t.jpeg',
    cache: '/search/eyQe1mv'
  }
]
type BlogCard = {
  heading: string
  message: string
  image: string
  cache: string
}
export function BlogCards() {
  const [selectedMessage, setSelectedMessage] = useState<BlogCard | null>(null)

  const onClickCard = (message: BlogCard) => {
    setSelectedMessage(message)
  }

  const closePopup = () => setSelectedMessage(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-8 w-screen sm:w-fit">
      {exampleMessages.map((message, index) => (
        <Card
          key={index}
          className="mx-6 sm:mx-0 sm:max-w-80 sm:h-80 cursor-pointer hover:outline hover:outline-foreground hover:outline-2"
          onClick={() => onClickCard(message)}
        >
          <CardContent className="p-3">
            <Image
              className="w-full h-48 object-cover"
              width={512}
              height={512}
              src={message.image}
              alt="image"
            />
            <div className="h-auto text-xl font-bold">{message.heading}</div>
          </CardContent>
        </Card>
      ))}

      {selectedMessage && (
        <>
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-80"
            onClick={closePopup}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center">
            <Card className="relative p-4 w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-[82rem] h-2/5">
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
                    これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
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
