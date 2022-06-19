import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import {
  Text,
  Button,
  Checkbox,
  Flex,
  Table,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { AnchorLink } from "~/components/AnchorLink";
import { Card } from "~/components/Card";

const StyledLink = styled.a`
  &[aria-disabled] {
    pointer-events: none;
  }
`;

const Page: React.VFC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onCheckChange = useCallback(
    (eve: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(eve.target.checked);
    },
    [setIsChecked],
  );

  return (
    <Layout>
      <Flex
        maxW="1200px"
        marginX="auto"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Card title="サークル参加をする方へ">
          <Card.Section title="はじめに">
            当イベントにて二次創作作品の頒布や展示を希望される総理には、サークル参加の事前申込をお願いしております。
            <br />
            下記の諸注意をお読みいただいた上で、所定の方法にてお申し込みください。
            <br />
            なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
          </Card.Section>
          <Card.Section title="感染症対策とイベント開催について">
            昨今の感染症に関する世情を鑑み、9月25日に開催予定の本イベントにおいては感染症の拡大を防止する措置を講じることとします。
            <br />
            主催である戦挙管理委員会は、9月25日時点で可能な限りの措置を講じます。
            <br />
            サークル参加総理の皆さんにも様々な形で感染拡大防止にご協力いただきたく存じますので、何卒ご理解ください。
            <br />
            <Text as="span" fontWeight="500">
              なお、緊急事態宣言が発表された場合などはイベント開催を取りやめる場合がありますので、あらかじめご了承ください。
            </Text>
            <br />
            開催取りやめとなった場合は参加費の返金を行います。
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
                  <Td>12:30</Td>
                  <Td>【即売会】開始</Td>
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
            <br />
            <br />
            コスプレ諸注意は コスプレ参加者向けのページ に掲載しております。
            <br />
            <AnchorLink to="/cosplay">https://festia.moe/cosplay</AnchorLink>
            <br />
            コスプレ参加予定の方はご一読ください。
          </Card.Section>
          <Card.Section title="サークル参加資格">
            ☆「政剣マニフェスティア」の二次創作作品を1点以上頒布または展示できること
            <br />
            ☆ 開催当日までメールで《確実に》連絡可能であること
            <br />
            ☆&quot;戦挙権&quot;を持っていた（「政剣マニフェスティア」のプレイヤーであった）こと
          </Card.Section>
          <Card.Section title="サークル参加費用">
            1スペース&nbsp;3500円
            <br />
            [含まれるもの]
            <br />
            ・長机半分（幅900mm*奥行600mm）
            <br />
            ・イス1脚
            <br />
            ・2名入場可能
            <br />
            ※追加イス 500円/1脚（追加は最大2脚まで）
            <br />
            ※追加入場 600円/1名（追加は最大1名まで）
            <br />
            <br />
            ※複数スペース申込・合体申込可能
            <br />
            例）2スペース申込 7000円
            <br />
            [含まれるもの]
            <br />
            ・長机1つ分（幅1800mm*奥行600mm）
            <br />
            ・イス2脚
            <br />
            ・4名入場可能
            <br />
            ※追加イス 500円/1脚（追加は最大4脚まで）
            <br />
            ※追加入場 600円/1名（追加は最大2名まで）
            <br />
            <br />
            ※参加費支払方法の詳細は、申込締切後にメールにてご連絡いたします。
          </Card.Section>
          <Card.Section title="申込期限">
            2022年7月21日（月曜日・海の日）&nbsp;23:59まで
            <br />
            ※申込後のキャンセルはお受けできません
          </Card.Section>
          <Card.Section title="参加申込方法">
            申込受付期間中に「オンライン申し込みフォーム」からお申し込み下さい。
          </Card.Section>
          <Card.Section title="サークルカットについて">
            psd形式のテンプレートを用意しております。ご活用ください。
            <br />
            作成上の注意事項は、サークルカットのテンプレート内にある「カット作成の注意点」に記載しております。必ずお読みください。
            <br />
            ※アナログ原稿およびオフラインでのサークルカット受付は行いません。
            <br />
            <br />
            <AnchorLink href="/assets/bin/cut_win.zip" target="_self">
              サークルカットテンプレート(ZIP形式)
            </AnchorLink>
          </Card.Section>
          <Card.Section title="宅配便による搬入・搬出">
            ヤマト運輸の宅急便をご利用いただけます。
            <br />
            伝票の記載例など、注意点は後日改めてご案内します。
          </Card.Section>
          <Card.Section title="その他">
            ・イベント当日、戦挙管理委員（スタッフ）が頒布物の確認を行うことがあります。ご協力をお願いいたします。
            <br />
            ・頒布印刷物について、奥付または奥付に準ずる欄に著者名やサークル名の表記がない場合、頒布をお断りすることがあります。
            <br />
            ・申込フォームの「成人向け作品」欄にて「無」を選択されたサークル様は、形態を問わず成人向け作品の頒布および展示が禁止となります。変更がある場合は、事前に戦挙管理委員会までご連絡ください。
            <br />
            ・壁、柱、窓、扉などにポスターなどを貼り付ける行為は厳禁です。あらかじめポスタースタンドなどの準備をお願いいたします。
            <br />
            ・電源の使用はできません。
            <br />
            ・駐車場のご用意はできません。搬入・搬出時に車両を使用する場合は、事前に戦挙管理委員会までご相談ください。
            <br />
            ・飲食は可能ですが、会場を汚されないようにお願いいたします。
            <br />
            ・ゴミの取り扱いについては、後日告知いたします。なお、会場内外でのポイ捨ては厳禁です。
            <br />
            ・施設内は全面禁煙です。喫煙は駐輪場奥の喫煙コーナーでお願いいたします。
            <br />
            ・会場内非常口の前には荷物を置かないようにお願いいたします。
            <br />
            ・その他、イベント当日に会場にてお困りごとや不明点がございましたら、最寄りの戦挙管理委員までお声がけください。
          </Card.Section>
          <Card.Section title="設営・撤収作業への協力のお願い">
            会場内に机や椅子などを並べる作業や、片付ける作業をお手伝いいただける方を事前に募集する予定です。
            <br />
            詳細は後日告知いたします。
            <br />
            ご都合の合う方は是非ともご助力いただけますと幸いです。
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
        <Card title="サークル参加フォーム">
          <Card.Section title="">
            <Checkbox
              colorScheme="blue"
              isChecked={isChecked}
              onChange={onCheckChange}
            >
              以上の内容を熟読しました。
            </Checkbox>
            <br />
            <br />
            <StyledLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNCYokVe_YMdSebVhrJDn87pTFoMsCXxAE059grcM-b9RLtA/viewform"
              target="_blank"
              rel="noreferrer"
              aria-disabled={!isChecked || (undefined as unknown as boolean)}
              tabIndex={!isChecked ? -1 : 0}
            >
              <Button as="span" colorScheme="blue" disabled={!isChecked}>
                サークル参加する
              </Button>
            </StyledLink>
          </Card.Section>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
