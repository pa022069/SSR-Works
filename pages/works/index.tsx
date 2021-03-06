import type { NextPage } from 'next';
import { Head } from '../../components/NextComponents';
import { WrapHeader, WrapFooter } from '../../components/WrapTemplate';
import {
  SectionContainer,
  ListContainer,
  ItemContainer,
  ItemContent,
  SortContainer,
  FullContainer,
  FullContent,
  ExpandButton,
  ItemPhotos
} from './_document';
import { faThLarge, faThList, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const demoData = [
  {
    title: "蘇格登 - 敬歡聚時刻",
    description: "敘述1",
    skill: "React / Webpack"
  },
  {
    title: "蘇格登 - 蘇式餐酒館",
    description: "敘述2",
    skill: "React / Webpack / Canvas"
  },
  {
    title: "特力屋 - 購物網站",
    description: "敘述3",
    skill: "Bootstrap5 / jQuery"
  },
  {
    title: "全聯 - 中秋達人檢定烤",
    description: "敘述4",
    skill: "React / Canvas"
  },
  {
    title: "川見鱈蟹柳",
    description: "敘述5",
    skill: "Canvas"
  },
  {
    title: "IBM - 資安人員你有多崩潰",
    description: "敘述6",
    skill: "Canvas"
  },
  {
    title: "IBM - 數位轉型神助攻",
    description: "敘述6",
    skill: ""
  },
  {
    title: "JP Morgan - 官網活動",
    description: "敘述6",
    skill: ""
  },
  {
    title: "康健人壽 - 輕。生活指數",
    description: "敘述6",
    skill: "React / Canvas"
  },
  {
    title: "諾優能 - 寶寶小情歌",
    description: "敘述6",
    skill: "Canvas"
  },
  {
    title: "IBM -資料塑形中心",
    description: "敘述6",
    skill: "Canvas"
  },
  {
    title: "安能亞太",
    description: "敘述6",
    skill: ""
  },
  {
    title: "皇家禮炮 - 品牌頁面",
    description: "敘述6",
    skill: ""
  },
  {
    title: "飛利浦 - SAECO咖啡機",
    description: "敘述6",
    skill: ""
  },
  {
    title: "華康 - 華康黑體系列",
    description: "敘述6",
    skill: ""
  },
  {
    title: "臺灣精品 - 電競杯",
    description: "敘述6",
    skill: ""
  },
  {
    title: "諾優能 - 寶寶晚輩圖",
    description: "敘述6",
    skill: "Canvas"
  },
];

const Works: NextPage = () => {
  const [sortType, setSortType] = useState<string>("block");

  return (
    <>
      <Head>
        <title>Works | 作品回顧</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapHeader />
      <SectionContainer>
        <SortContainer>
          <a>
            <FontAwesomeIcon onClick={() => setSortType("block")} style={{ fontSize: "14px", opacity: sortType === "block" ? 1 : 0.5 }} icon={faThLarge} />
          </a>
          <a>
            <FontAwesomeIcon onClick={() => setSortType("list")} style={{ fontSize: "14px", opacity: sortType === "list" ? 1 : 0.3 }} icon={faThList} />
          </a>
        </SortContainer>
        <ListContainer>
          {
            demoData.map((item) => (
              sortType === "block" ? (
                <ItemContainer key={item.title}>
                  <ItemPhotos style={{ position: "relative", width: "100%", height: "0px", paddingBottom: "80%" }}>
                    <ExpandButton>
                      <FontAwesomeIcon icon={faSearch} />
                    </ExpandButton>
                  </ItemPhotos>
                  <ItemContent>
                    <h3>{item.title}</h3>
                    <p style={{ color: "#888" }}>{item.skill}</p>
                  </ItemContent>
                </ItemContainer>
              ) : (
                <FullContainer key={item.title}>
                  <ItemPhotos style={{ position: "relative", width: "60%", height: "0px", paddingBottom: "30%" }}>
                    <ExpandButton>
                      <FontAwesomeIcon icon={faSearch} />
                    </ExpandButton>
                  </ItemPhotos>
                  <FullContent>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </FullContent>
                </FullContainer>
              )
            )
            )
          }
        </ListContainer>
      </SectionContainer>
      <WrapFooter />
    </>
  );
};

export default Works;