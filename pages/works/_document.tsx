import styled from 'styled-components';
import Document from '../../components/StyledDoc';

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
  border-bottom: 1px solid #333;
  padding-top: 70px;
  padding-bottom: 1rem;
`;

export const ListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 7.5px;
`;

export const ItemContainer = styled.div`
  position: relative;
  width: calc((100% / 1) - 15px);
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  margin: 7.5px;
  @media(min-width: 576px) {
    width: calc((100% / 2) - 15px);
  }
  @media(min-width: 992px) {
    width: calc((100% / 3) - 15px);
  }
  @media(min-width: 1200px) {
    width: calc((100% / 4) - 15px);
  }
`;

export const ItemContent = styled.div`
  position: relative;
  width: 100%;
  padding: 7.5px;
  border-top: 1px solid #333;
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

export const FullContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  border: 1px solid #333;
  margin: 7.5px;
  display: flex;
  flex-direction: row;
`; 

export const FullContent = styled.div`
  position: relative;
  width: 40%;
  padding: 7.5px;
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

export const SortContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0 7.5px;
  padding-top: 15px;
  a {
    width: 20px;
    display: block;
    position: relative;
    margin: 0 7.5px;
    cursor: pointer;
  }
  svg {
    width: 100%;
    transition: all 0.3s;
  }
`;

export const ItemPhotos = styled.a`
  background-size: cover;
  background-position: center;
  &:hover {
    a {
      visibility: visible;
      opacity: 1;
    }
  }
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

