import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { Text, Button, Checkbox, Flex } from "@chakra-ui/react";
import { DefaultLayout as Layout } from "~/components/layouts/index";
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
        <Card title="コスプレ参加をする方へ">
          <Card.Section title="感染症対策に関するルール">
            ・混雑を避けるため、更衣室の利用は
            <Text as="span" fontWeight="500">
              事前登録制
            </Text>
            となります。フォームより申請ください。
            <br />
            ・受付期間内であっても上限人数に達し次第、事前登録は終了させていただきます。ご了承ください。
            <br />
            ・更衣室の入室人数を制限させていただきます。順番でお待ちいただく場合があります。
            <br />
            ・更衣室使用時間はおひとり様1回につき40分までとなりますよう、ご協力をお願い致します。
            <br />
            ・更衣室内では対人距離を確保し、会話等はお控えください。
            <br />
            ・更衣室内、会場内共にやむを得ない場合を除き極力マスクの着用をお願い致します。
            <br />
            ・マスクを外しての撮影は指定された撮影スペースのみで行い、マスクを外した被写体の方は喋らないようにご注意ください。撮影時にも対人距離を確保するようご協力お願い致します。
          </Card.Section>
          <Card.Section title="登録受付期間">
            2022年8月31日（水曜日）&nbsp;23:59まで
          </Card.Section>
          <Card.Section title="入場について">
            更衣室開放時間は【10:30〜18:00】の予定となっております。
            <br />
            事前登録完了時にお送りしたメールの画面、またはメールを印刷したものを受付にご提示ください。
            <br />
            コスプレ更衣室は、サークル参加の総理は【10:30】より、一般参加の総理は【11:30】よりご利用いただけます。
            <br />
            即売会エリアへはサークル参加のコスプレ総理は【10:30】より、一般参加のコスプレ総理は【12:30】より入場が可能です。
            <br />
            更衣室入室の際、イベント入場料の他、コスプレ登録・更衣室使用料としてサークル参加者は【500円】、一般参加者は【1500円】を頂戴いたします。
            <br />
            当日お困りの事や不明点がございましたら、お近くの戦挙管理委員までお声がけください。
          </Card.Section>
          <Card.Section title="更衣について">
            更衣室は所定の更衣室のみをご利用ください。
            <br />
            トイレでの着替えや、ヘアースプレーなどの使用、地毛及びウィッグのカットは厳禁です。
            <br />
            更衣室はきれいにご利用ください。荷物・ゴミ等の放置は禁止です。
            <br />
            更衣室内での一切の撮影行為を禁止します。
            <br />
            更衣室は【18:00完全閉鎖】となります。時間は厳守いただきますよう、お願いいたします。
          </Card.Section>
          <Card.Section title="衣装について">
            国内外を問わず、リアルな軍服・国旗・階級章の着用は禁止します。実在の人物、団体とは何の関係もないただの美少女が戦うファンタジーですからね。
            <br />
            コスプレや、コスプレと思われるような衣服・派手なメイクでの入退場は禁止です。一般常識の範囲内におさまる服装でご来場ください。
            <br />
            過度に露出の多いコスチュームはお避けください。公式立ち絵に従う範囲で、必ずボディスーツ・肌着・サポーターなどを着用し、露出対策をお願いいたします。
            <br />
            水着コスプレはご遠慮ください。
            <br />
            コスプレとしての着ぐるみ（頭にかぶり物をしていて顔が見えないものを指します）の着用は可能です。
            <br />
            女装をする男性コスプレ総理の方は、わき毛、すね毛、ひげなどの露出する部分の毛は処理をし、生足の露出は避けてタイツ、ストッキング、スパッツ等を着用してください。ご協力をお願い申し上げます。
            <br />
            更衣室の入退室時は、戦挙管理委員による衣装チェックにご協力ください。過度な露出が認められる場合は、上着などの着用をお願いすることがございます。
            <br />
            戦挙管理委員から衣装修正の指示を受けた総理は更衣室に戻り、その箇所を速やかに修正してください。
          </Card.Section>
          <Card.Section title="コスプレ可能エリアについて">
            4Fのみコスプレ可能エリアとなります。
            <br />
            コスプレと判断される服装、メイクで1F及び館外へ出られることはお控えください。
          </Card.Section>
          <Card.Section title="会場内マナーについて">
            会場内を走ることや、場内・周辺でのパフォーマンス等（走る・飛ぶ・騒ぐ・振り回す・楽器をならす等の行為）はおやめください。事故や怪我のもととなります。
            <br />
            長物などは破損や周囲の邪魔になる恐れがありますので、会場外およびサークルスペースではケース等に入れて持ち運びください。
            <br />
            お荷物は更衣室や本部での預かりが可能ですが、貴重品は必ずご携帯ください。万一紛失されましても、責任を負いかねます。あらかじめご了承ください。
            <br />
            イベント時間中に落し物や紛失物が発生した場合は、本部までお越しください。
            <br />
            不審物を発見した場合、不用意に触らず戦挙管理委員をお呼びください。
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
        <Card title="コスプレ事前登録フォーム">
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzT0EmNzv7IIfbeOnjueZWRfsd94DSWTlHSvaU0O2rEPTi3w/viewform"
              target="_blank"
              rel="noreferrer"
              aria-disabled={!isChecked || (undefined as unknown as boolean)}
              tabIndex={!isChecked ? -1 : 0}
            >
              <Button as="span" colorScheme="blue" disabled={!isChecked}>
                コスプレ事前登録する
              </Button>
            </StyledLink>
          </Card.Section>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
