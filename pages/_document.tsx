import styled from 'styled-components';
import Document from '../components/StyledDoc';

export default Document;

export interface WorkDataType {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
}

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
`;

export const KvSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: relative;
    font-family: 'Anton', sans-serif;
    font-size: 4rem;
    color: #555;
    line-height: 1;
    font-weight: 400;
    margin: 0;
    z-index: 1;
    @media (min-width: 768px) {
      font-size: 8rem;
    }
    span {
      color: #004B97;
      text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
    }    
  }
`;

export const ListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 1366px;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 0 auto;
`;

export const MainTitle = styled.h2`
  width: fit-content;
  position: relative;
  font-family: 'Anton', sans-serif;
  font-size: 4rem;
  max-width: 1366px;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  color: #F0F0F0;
  text-shadow: 0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
`;

export const ItemContainer = styled.div`
  position: relative;
  width: calc((100% / 1) - 15px);
  // border: 1px solid #333;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 7.5px;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s;
  @media(min-width: 576px) {
    width: calc((100% / 2) - 15px);
  }
  @media(min-width: 992px) {
    width: calc((100% / 3) - 15px);
  }
  &:hover {
    scale: 1.05;
  }
`;

export const ItemContent = styled.div`
  position: relative;
  width: 100%;
  padding: 7.5px;
  border-top: 1px solid #999;
  background-color: #FFF;
  h3 {
    margin: 0;
    margin-bottom: 7.5px;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const ItemPhotos = styled.a`
  background-size: cover;
  background-position: center;
  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

export const SkillItem = styled.div`
  width: fit-content;
  border: 2px solid #555;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const demoData = [
  {
    title: "寶可夢木製拼圖",
    description: "敘述1",
    imageUrl: 'images/work-0.jpg',
    url: 'http://pokemon.hellofish.com.tw/'
  },
  {
    title: "特力屋 - Campaign",
    description: "敘述1",
    imageUrl: 'images/work-1.jpg',
    url: 'https://www.our-work.com.tw/creative/jeffrey/work/20220913-trCampaign-rwd/'
  },
  {
    title: "星展隨行",
    description: "敘述1",
    imageUrl: 'images/work-2.jpg',
    url: 'https://www.our-work.com.tw/creative/jeffrey/work/20220720-dbs/'
  },
  {
    title: "蘇格登 - 敬歡聚時刻",
    description: "敘述1",
    imageUrl: 'images/work-3.jpg',
    url: 'https://line.maltssociety.com.tw/events/singleton/SGTfoodiemap/campaign/'
  },
  {
    title: "蘇格登 - 蘇式餐酒館",
    description: "敘述2",
    imageUrl: 'images/work-4.png',
    url: 'https://line.maltssociety.com.tw/events/singleton/SGTfoodiemap/'
  },
  {
    title: "特力+ - 購物網站",
    description: "敘述3",
    imageUrl: 'images/work-5.jpg',
    url: 'https://www.trplus.com.tw/'
  },
  {
    title: "全聯 - 中秋達人檢定烤",
    description: "敘述4",
    imageUrl: 'images/work-6.png',
    url: 'https://www.our-work.com.tw/demosite/2020/2020-pxmart/game.html'
  },
  {
    title: "JP Morgan - 官網活動",
    description: "敘述6",
    imageUrl: 'images/work-7.jpg',
    url: 'https://www.our-work.com.tw/demosite/2020/2020-JPMorgan/'
  },
  {
    title: "康健人壽 - 輕。生活指數",
    description: "敘述6",
    imageUrl: 'images/work-8.png',
    url: 'https://www.our-work.com.tw/demosite/2020/2020-cigna/'
  },
  {
    title: "諾優能 - 寶寶小情歌",
    description: "敘述6",
    imageUrl: 'images/work-9.jpg',
    url: 'https://www.our-work.com.tw/demosite/2019/2019_nutrilon_danone/'
  },
  {
    title: "華康 - 華康黑體系列",
    description: "敘述6",
    imageUrl: 'images/work-10.jpg',
    url: 'https://www.dynacw.com.tw/product/dfheifamily/'
  },
  {
    title: "諾優能 - 寶寶晚輩圖",
    description: "敘述6",
    imageUrl: 'images/work-11.jpg',
    url: 'https://hoproject.our-work.com.tw/2019/20191121-nutrilon-picture/'
  },
];

export const skillsArray = [
  {
    name: 'React',
    type: 'front'
  },
  {
    name: 'Redux',
    type: 'front'
  },
  {
    name: 'Typescript',
    type: 'front',
  },
  {
    name: 'Ant Design',
    type: 'front'
  },
  {
    name: 'Jest',
    type: 'front'
  },
  {
    name: 'Sass',
    type: 'front'
  },
  {
    name: 'Tailwind CSS',
    type: 'front'
  },
  {
    name: 'Styled-components',
    type: 'front'
  },
  {
    name: 'jQuery',
    type: 'front'
  },
  {
    name: 'Webpack',
    type: 'front'
  },
  {
    name: 'NodeJs',
    type: 'back'
  },
  {
    name: 'Express',
    type: 'back'
  },
  {
    name: 'MySQL',
    type: 'back'
  },
  {
    name: 'Fastify',
    type: 'back'
  },
  {
    name: 'Photoshop',
    type: 'design'
  },
  {
    name: 'Illustrator',
    type: 'design'
  },
]