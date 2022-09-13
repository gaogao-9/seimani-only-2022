import React from "react";
import {
  Flex,
  List,
  ListIcon,
  ListItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaTrain, FaCompass, FaClock } from "react-icons/fa";
import styled from "@emotion/styled";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { Card } from "~/components/Card";
import { AnchorLink } from "~/components/AnchorLink";

const StyledIframe = styled.iframe`
  width: 100%;
  height: 640px;
  border: 0;
  padding: 10px;
`;

const Map: React.VFC = () => {
  return (
    <StyledIframe
      frameBorder="0"
      src="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJq3FUxZhgGGAR-_WCfU-yC6Q&destination=日本神奈川県川崎市幸区堀川町６６−２０+経済労働局川崎市産業振興会館&mode=walking&key=AIzaSyAAaCUU3jjAQggZTpe8AE_6DQxQ6TP8cLA"
      allowFullScreen
    />
  );
};

const Page: React.VFC = () => {
  return (
    <Layout>
      <Flex
        maxW="1200px"
        marginX="auto"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Card title="会場情報">
          <Wrap spacing={2} justify="center" align="center">
            <WrapItem
              width={{
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "calc(100% - 255px - 4px * 4)",
              }}
            >
              <Map />
            </WrapItem>
            <WrapItem width="255px">
              <List marginY={4} spacing={3}>
                <ListItem>
                  <ListIcon as={FaCompass} color="telegram.500" />
                  会場: 川崎市産業振興会館
                </ListItem>
                <ListItem>
                  <ListIcon as={FaClock} color="telegram.500" />
                  日程: 2022/09/25 (日)
                </ListItem>
                <ListItem>&nbsp;</ListItem>
                <ListItem>
                  <ListIcon as={FaTrain} color="green.500" />
                  JR川崎駅から徒歩8分
                </ListItem>
                <ListItem>
                  <ListIcon as={FaTrain} color="red.500" />
                  京急川崎駅から徒歩7分
                </ListItem>
                <ListItem>
                  公式サイトによる案内は
                  <AnchorLink href="https://www.kawasaki-net.ne.jp/access.html">
                    こちら
                  </AnchorLink>
                </ListItem>
              </List>
            </WrapItem>
          </Wrap>
        </Card>
        <Card title="会場地図">
          <Card.Section title="">
            <img src="/assets/img/map/map.png" alt="会場地図" />
          </Card.Section>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
