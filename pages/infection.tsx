import React from "react";
import { Flex } from "@chakra-ui/react";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { AnchorLink } from "~/components/AnchorLink";
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
        <Card title="感染症対策ページ">
          <Card.Section title="はじめに">
            本イベントでは、会場の所在地である神奈川県が公表する『感染防止策チェックリスト』に則り、感染症の拡大防止に努めるものとします。
            <br />
            <br />
            イベントに係る感染防止対策について - 神奈川県ホームページ
            <br />
            <AnchorLink href="https://www.pref.kanagawa.jp/docs/j8g/callcenter.html">
              https://www.pref.kanagawa.jp/docs/j8g/callcenter.html
            </AnchorLink>
            <br />
            <br />
            以下は、現時点で主催から参加者の皆さんにお願いすることが想定される対策の一例です。
          </Card.Section>
          <Card.Section title="来場前">
            ・当日早朝に検温（体温チェック）を必ず行ってください。高熱が出ている場合は、無理に参加をせず静養に努めてください。
            <br />・
            <AnchorLink href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html">
              接触確認アプリ（COCOA）
            </AnchorLink>
            のインストールを推奨します。
            <br />
            ・来場前に連絡先などの情報登録をお願いする予定です。万が一の場合、主催から保健所など公的機関に提供するために使用しますので、ご協力をお願いいたします。
          </Card.Section>
          <Card.Section title="来場後">
            ・入場時の検温にご協力ください。
            <br />
            ・入場者が多数の場合、入場制限・入れ替え制を実施する場合があります。当日の戦挙管理委員（スタッフ）の指示に従ってください。
            <br />
            ・会場内ではマスクを必ず着用してください。マスク未着用の場合、参加をお断りすることがあります。
            <br />
            ・マスクを外した状態での会話はご遠慮ください。
            <br />
            ・大声での発声はご遠慮ください。大声での発声が目についた場合、個別に注意させていただき、場合によってはご退場いただくこともあります。
            <br />
            ・会話しながらの食事はご遠慮ください。
            <br />
            ・手洗いや手指消毒を定期的に行ってください。
            <br />
            ・物品や金銭の受け渡しなどのコミュニケーションの際、お互いの肌が直接接触しないようにご配慮ください。
            <br />
            ・会場内で体調を崩した場合は、速やかに戦挙管理委員（スタッフ）に報告してください。
            <br />
            ・鼻水や唾液などがついたゴミはビニール袋に入れ、密閉して廃棄してください。
          </Card.Section>
          <Card.Section title="サークル参加者向け">
            ・間隔を空けた行列の整理にご協力ください。
            <br />
            ・手指消毒剤を各サークルごとにご用意いただくことを推奨いたします。
            <br />
            ・キャッシュレス決済、個人間送金アプリなどの導入を推奨します。本名ではなくニックネームでの決済・送金が可能なアプリもありますので、ご検討ください。
            <br />
            ・各サークル様ごとの決済手段の事前告知が必要な場合、主催は参加者に向けて告知が行き渡るように協力いたします。
          </Card.Section>
          <Card.Section title="コスプレ参加者向け">
            ・今回のコスプレ参加は、混雑を避けるために事前登録制です。
            <br />
            ・受付期間内であっても上限人数に達し次第、事前登録は終了いたします。
            <br />
            ・更衣室の入室人数を制限いたします。そのため、順番でお待ちいただく場合があります。
            <br />
            ・更衣室の使用時間はお1人様1回につき40分までとなりますよう、ご協力をお願い致します。
            <br />
            ・更衣室内では対人距離2mを確保し、会話などはお控えください。
            <br />
            ・更衣室内・会場内ともに、やむを得ない場合を除き極力マスクの着用をお願い致します。
            <br />
            ・マスクを外しての撮影は指定された撮影スペースのみで行い、マスクを外した被写体の方は喋らないようにご注意ください。
            <br />
            ・撮影時にも対人距離2mを確保するよう、ご協力お願い致します。
            <br />
            <br />
            その他注意点はコスプレ参加者向けページをご確認ください。
            <br />
            <AnchorLink to="/cosplay">https://festia.moe/cosplay</AnchorLink>
          </Card.Section>
          <Card.Section title="さいごに">
            これらのお願いは、情勢の変化やチェックリストの更新が発生した場合などに随時変更されますので、あらかじめご了承ください。
            <br />
            変更があり次第、Webページやtwitterなどで告知いたします。
          </Card.Section>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
