import { NextResponse } from "next/server";
import { getServerSession } from 'next-auth';

const posts = [
    {
      title: "Lorem",
      slug: "lorem-ipsum-post-one",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, risus in vestibulum mollis, mauris leo elementum nunc, quis faucibus velit purus non est. Proin varius, tellus quis mollis finibus, tellus nunc vehicula dui, et convallis velit lacus vitae risus."
    },
    {
      title: "Lorem Ipsum Post Two",
      slug: "lorem-ipsum-post-two",
      content: "Fusce a lacinia nunc. Sed accumsan, lacus ac egestas pharetra, mi elit ornare neque, in gravida purus lectus sed arcu. Maecenas vel congue sapien. Nunc et neque id lectus fringilla egestas at vel nulla."
    },
    {
      title: "Lorem Ipsum Post Three",
      slug: "lorem-ipsum-post-three",
      content: "Suspendisse at mi in magna lacinia sodales. Morbi fringilla, lorem vel lacinia fringilla, risus risus ornare ante, eu laoreet mi mi a dolor. Aenean sodales augue a nisl ultrices, quis tincidunt felis porttitor."
    },
    {
      title: "Lorem Ipsum Post Four",
      slug: "lorem-ipsum-post-four",
      content: "Cras cursus lobortis sem, et rutrum lectus iaculis ut. Quisque viverra euismod nisi, quis fermentum felis aliquet id. Mauris laoreet neque nulla, id faucibus urna efficitur ac."
    },
    {
      title: "Lorem Ipsum Post Five",
      slug: "lorem-ipsum-post-five",
      content: "Pellentesque ac tortor arcu. Proin fringilla, metus ac finibus mollis, velit erat facilisis nibh, vitae vehicula ligula est eget sem. Integer eget pharetra lectus, eget tincidunt ante."
    }
  ];

  

  export async function GET() {
   
    const session = await getServerSession();
    
    return NextResponse.json(posts);
  }