import React from "react";
import styled from "@emotion/styled";
import { Button, Flex, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { AnchorLink } from "~/components/AnchorLink";
import { Card } from "~/components/Card";

const StyledLink = styled.a`
  &[aria-disabled] {
    pointer-events: none;
  }
`;

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
        <Card title="参加者全般">
          <Card.Section title="はじめに">
            一般参加を予定される総理の皆さんは、下記の諸注意をお読みいただいた上でご参加ください。
            <br />
            なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
          </Card.Section>
          <Card.Section title="感染症対策とイベント開催について">
            昨今の感染症に関する世情を鑑み、9月25日に開催予定の本イベントにおいては感染症の拡大を防止する措置を講じることとします。
            <br />
            主催である戦挙管理委員会は、9月25日時点で可能な限りの措置を講じます。
            <br />
            一般参加総理の皆さんにも様々な形で感染拡大防止にご協力いただきますので、何卒ご理解ください。
            <br />
            詳細：感染症対策ページ
            <br />
            <AnchorLink to="/infection">
              https://only2022.festia.moe/infection
            </AnchorLink>
            <br />
            <br />
            なお、感染状況が悪化した場合などはイベント開催を取りやめる場合があります。予めご了承ください。
          </Card.Section>
          <Card.Section title="イベント名">
            政剣マニフェスティアオンリー同人誌即売会
            <br />
            緊急交流イベント「漕ぎ出せ！ソクバイ海Ⅴ」
            <br />
            #アイムソウリー2022
          </Card.Section>
          <Card.Section title="日程・会場">
            2022年9月25日（日曜日）
            <br />
            川崎市産業振興会館&nbsp;4階企画展示場
          </Card.Section>
          <Card.Section title="イベントスケジュール">
            <Table>
              <Tbody>
                <Tr>
                  <Td width="80px">09:00</Td>
                  <Td>【会場】設営開始</Td>
                </Tr>
                <Tr>
                  <Td>10:30</Td>
                  <Td>
                    サークル参加総理入場開始
                    <br />
                    【更衣室】開場
                  </Td>
                </Tr>
                <Tr>
                  <Td>11:30</Td>
                  <Td>コスプレ一般参加総理入場開始</Td>
                </Tr>
                <Tr>
                  <Td>12:00</Td>
                  <Td>一般参加総理待機列形成開始</Td>
                </Tr>
                <Tr>
                  <Td>12:30</Td>
                  <Td>
                    一般参加総理入場開始
                    <br />
                    【即売会】開始
                  </Td>
                </Tr>
                <Tr>
                  <Td>14:00</Td>
                  <Td>
                    【即売会】終了
                    <br />
                    【宅急便】受付開始
                  </Td>
                </Tr>
                <Tr>
                  <Td>15:00</Td>
                  <Td>
                    【宅急便】受付終了
                    <br />
                    【アフターイベント】開始
                  </Td>
                </Tr>
                <Tr>
                  <Td>16:00</Td>
                  <Td>【アフターイベント】終了予定</Td>
                </Tr>
                <Tr>
                  <Td>18:00</Td>
                  <Td>【更衣室】閉鎖</Td>
                </Tr>
                <Tr>
                  <Td>19:00</Td>
                  <Td>【会場】完全撤収</Td>
                </Tr>
              </Tbody>
            </Table>
            <br />
            ※スケジュールは変更になることがあります
          </Card.Section>
          <Card.Section title="参加費">
            即売会参加&nbsp;前売&nbsp;600円&nbsp;/&nbsp;当日&nbsp;1000円（受付時に入場特典アイテム兼入場証をお渡しする予定です）
            <br />
            なお、今回はLivePocketを利用したデジタルチケットを導入します。本ページの最後に販売ページへのリンクがあります。
          </Card.Section>
          <Card.Section title="再入場方法">
            イベント時間中は、会場入口の戦挙管理委員（スタッフ）に入場証をお見せください。
          </Card.Section>
          <Card.Section title="事前登録と入場整理へのご協力のお願い">
            今回のイベントでは、新型感染症の感染拡大防止を目的に、以下の対策を実施いたします。
            <br />
            なお、状況に応じて変更される可能性があります。最新の情報は決まり次第告知いたします。
            <br />
            <br />
            1.&nbsp;来場者情報の事前登録
            <br />
            ・今回の開催においても、来場者の皆さんの連絡先情報をお預かりします。
            <br />
            ・すべての参加者の皆さんに、連絡先情報を事前にご登録いただきます。
            <br />
            ・ご入力いただきました情報は、主催の戦挙管理委員会のプライバシーポリシーに基づき厳重に管理し、開催後1か月を目処に、適切な手段で廃棄いたします。
            <br />
            ・新型感染症拡大予防およびそれに係る調査の目的で、公的機関から来場者の皆さんの連絡先情報の提出を求められた場合、公的機関に対して連絡先情報を提供いたします。
            <br />
            <br />
            2.&nbsp;入場制限について
            <br />
            ・入場者が多数の場合、入場制限・入れ替え制を実施する場合があります。当日の戦挙管理委員（スタッフ）の指示に従ってください。
            <br />
            <br />
            参加総理の皆さんにはご不便・ご迷惑をおかけいたしますが、何卒ご協力のほど宜しくお願い申し上げます。
          </Card.Section>
          <Card.Section title="迷惑行為、危険行為の禁止">
            ・会場内外で走る、受付より外の会場外共用部に長時間立ち止まる、などの行為はご遠慮ください。
            <br />
            ・一箇所のサークルスペース前に長時間居座る、近隣のサークルスペースの前にはみ出す、などの行為は、他の参加者の迷惑になりますのでご遠慮ください。
            <br />
            ・会場は禁煙、禁酒です。喫煙は指定の喫煙スペースにてお願いします。
            <br />
            ・会場内や会場周辺での勧誘行為、パフォーマンスなどの混乱が予想される行為は禁止です。
            <br />
            ・モデルガン・エアガンなどの武器類、楽器などの大きな音の鳴る物、引火物、アルコール（消毒用途を除く）、ペット、その他危険と思われるものの持ち込みは禁止です。
          </Card.Section>
          <Card.Section title="会場内撮影について">
            ・会場内での動画撮影は一切禁止です。
            <br />
            ・会場内での写真撮影はサークルスペースや展示物、コスプレの撮影に限り可能です。ただし、人物が写り込まないようにご配慮ください。もし写り込んでしまったものをSNS等にアップロードする場合は【必ず加工を施し】個人の特定ができないようにしてください。
            <br />
            ・サークルスペースやコスプレイヤーを撮影する際、また撮影したものをSNSにアップロードする際には、被写体のサークル参加者やコスプレ参加者に許可を得てください。
            <br />
            ・コスプレ撮影を行う場合、サークルスペースが写り込まないようにご配慮ください。
          </Card.Section>
          <Card.Section title="会場利用規約厳守のお願い">
            ・共用部のコンセントの使用は禁止です。
            <br />
            ・荷物は受付より外の共用部には絶対に置かないでください。
            <br />
            ・ゴミは所定の場所に捨ててください。所定の場所以外の箇所でのポイ捨ては厳禁です。
            <br />
            ・会場内非常口の前に荷物を置かないようにお願いいたします。
            <br />
            ・会場敷地内は全面禁煙です。喫煙スペースはございません。電子タバコ等含め喫煙はお控えください。
          </Card.Section>
          <Card.Section title="落とし物について">
            ・落とし物・忘れ物などは【会場本部】までお届けください。
            <br />
            ・金銭・貴重品の紛失につきましては当イベント主催者では責任を負いかねますので、貴重品の管理にご注意ください。
          </Card.Section>
          <Card.Section title="その他">
            ・緊急の場合を除き、個人的な呼び出しはできません。
            <br />
            ・ケガをした方、気分の悪くなった方はお近くの戦挙管理委員までお申し出ください。
            <br />
            ・飲食物の持ち込みは可能ですが、会場を汚されないよう十分ご注意ください。
            <br />
            ・イベント会場内での手作り食品の差し入れはご遠慮ください。
            <br />
            ・コスプレまたはコスプレと判断されるような服装での入場・退場は禁止です。コスプレをされる場合、所定の更衣室での着替えをお願い致します。
            <br />
            ・会場外における事故・トラブルにつきまして当イベント主催者は保証できません。ご来場、ご帰宅の際はご注意ください。
            <br />
            <br />
            ・コスプレ諸注意は&nbsp;コスプレ参加者向けのページ&nbsp;に掲載しております。コスプレ参加予定の方はご一読ください。
            <br />
            <AnchorLink to="/cosplay">
              https://only2022.festia.moe/cosplay
            </AnchorLink>
          </Card.Section>
          <Card.Section title="設営・撤収作業への協力のお願い">
            会場内に机や椅子などを並べる作業や、片付ける作業をお手伝いいただける方を募集しています。
            <br />
            ご都合の合う方は是非ともご助力いただけますと幸いです。
            <br />
            <AnchorLink href="https://docs.google.com/forms/d/e/1FAIpQLScRIgimgGdXiUn1WfEghBAPyU3YxINYDuDfgfw7DQfhsCXy8g/viewform">
              設営登録フォームはこちら
            </AnchorLink>
          </Card.Section>
          <Card.Section title="※一般参加者による会場内頒布行為の禁止※">
            会場内では、一般参加者による同人誌、同人グッズ、あるいはそれに準ずるものの頒布行為は全面的に禁止です。
            <br />
            一般参加者からサークル参加者への差し入れ等は良識の範囲内でお願い致します。
            <br />
            目に余る行為が見受けられた場合はご退場をお願いする場合もあります。
            <br />
            即売会を皆様に楽しんでいただくため、ご協力をお願い致します。
            <br />
            会場内で頒布行為をしたい方は是非ともサークル参加を！
          </Card.Section>
        </Card>
        <Card title="参加サークル一覧">
          <Card.Section title="">
            <img
              src="/assets/img/circle/circlelist.jpg"
              alt="参加サークル一覧"
            />
          </Card.Section>
        </Card>
        <Card title="プライバシーポリシー">
          <Card.Section title="">
            戦挙管理委員会（以下「当会」といいます）は、個人情報の保護に関する法令等を遵守するとともに、本プライバシーポリシーを遵守します。
          </Card.Section>
          <Card.Section title="1. 個人情報の定義">
            個人情報とは、氏名、住所、生年月日、年齢、性別、電話番号、電子メールアドレス、IPアドレス、銀行口座番号のうち、1つあるいは2つ以上を組み合せることによって、特定の個人を識別できるものを指します。
          </Card.Section>
          <Card.Section title="2. 個人情報の取得">
            当会は、個人情報を、適正な手段により取得いたします。
          </Card.Section>
          <Card.Section title="3. 個人情報の利用目的">
            当会は、主催する即売会・イベント等において、個人情報を、以下の目的で利用し、ご本人の同意を頂いた範囲内においてのみ取り扱います。
            <br />
            (1) 即売会・イベント等の運営に必要な情報を処理するため
            <br />
            (2) 即売会・イベント等に関する重要事項を参加者に連絡するため
            <br />
            (3) 即売会・イベント等の運営上のトラブルを解決するため
          </Card.Section>
          <Card.Section title="4. 個人情報の第三者への提供">
            当会は、個人情報保護法その他の法令により認められる事由がある場合を除き、ご本人の同意なくして、第三者に提供・開示しません。
          </Card.Section>
          <Card.Section title="5. 個人情報の安全管理">
            当会は、個人情報を適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
          </Card.Section>
          <Card.Section title="6. 個人情報の開示、訂正、苦情等">
            当会は、個人情報について、開示、訂正、苦情等について、ご本人からのお申出があった場合には、お申出頂いた方がご本人であることを確認の上、個人情報保護法の定めに従い、速やかに対応いたします。
          </Card.Section>
          <Card.Section title="7. プライバシーポリシーの変更">
            当会は、必要に応じて、本プライバシーポリシーの内容を改定することがあります。その場合、変更箇所を速やかに公表するものとします。
          </Card.Section>
          <Card.Section title="8. お問い合わせ窓口">
            戦挙管理委員会&nbsp;seimani.only[at]gmail.com
          </Card.Section>
        </Card>
        <Card title="一般参加チケット販売">
          <Card.Section title="">
            <StyledLink
              href="https://t.livepocket.jp/e/seimani-only-5"
              target="_blank"
              rel="noreferrer"
            >
              <Button as="span" colorScheme="blue">
                チケット販売ページへ
              </Button>
            </StyledLink>
          </Card.Section>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
