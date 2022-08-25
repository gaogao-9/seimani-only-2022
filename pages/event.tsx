import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { Card } from "~/components/Card";

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
        <Card title="色紙イベント">
          <Card.Section title="色紙大募集！">
            今回も全国の総理の皆さんから色紙を募集します！
            <br />
            会場を政霊たちのイラストで華やかに飾りましょう！
            <br />
            色紙はイベント中に一定時間飾った後、参加者の皆さんに来場プレゼントとしてお渡しします。
          </Card.Section>
          <Card.Section title="応募条件">
            <img src="/assets/img/event/info.jpg" alt="応募条件" />
          </Card.Section>
          <Card.Section title="">
            <Text as="span" fontWeight="500">
              宅配搬入での事前送付をお願いしております。
            </Text>
            上記画像の通り、今年は会場にいらっしゃる総理にもいらっしゃらない総理にも、宅配搬入での事前送付をお願いしております。
            <br />
            設営を円滑に行うため、ご理解とご協力をお願い致します。
          </Card.Section>
          <Card.Section title="送り先">
            <img src="/assets/img/event/slip.jpg" alt="送り先伝票" />
            <br />
            ※運送業者はヤマト運輸のみ受付となります。ご了承ください。
            <br />
            <br />
            【受付期間: 9月22日（木）～9月24日（土）】
          </Card.Section>
        </Card>
        <Card title="アフターイベント">
          <Card.Section title="教えて！政マニ運営！">
            政マニの現運営者であり「詫びおじ」としても知られる三輪光さんが、総理の皆さんから募集した疑問・質問にお答えくださいます！
            <br />
            ※ご本人のご登壇はありません。
          </Card.Section>
          <Card.Section title="政マニアック！クイズ大会！">
            政マニアック！クイズ大会！
            <br />
            第一回開催にて大好評だった企画が帰ってきます！
            <br />
            優勝者には特別な景品をプレゼント！
            <br />
            参加予定の総理の皆さんはしっかり復習しておきましょう！
          </Card.Section>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
