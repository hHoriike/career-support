import React from "react";
import Link from "next/link";
import styles from "./Article.module.scss";
import Header from "features/header/header";
import Footer from "features/footer/footer";
import UserInfo from "features/user/UserInfo";

type Props = {
  user: UserInfo | undefined;
};

const ArticleTemplate = (props: Props) => {
  const { user } = props;
  return (
    <div className={styles.container}>
      <Header user={user}></Header>
      <article className={styles.article}>
        <div className={styles.articleHead}>
          <div>堀池浩輝 (ほりいけひろき)</div>
          <div>株式会社SBS情報システム</div>
          <h1>好きなものだけに囲まれていたい作り手と街と営むお店</h1>
          <div>2021.10.2 Tue</div>
        </div>
        <div
          className={
            user === undefined ? styles.gurestArticleBody : styles.articleBody
          }
        >
          <p>長崎県波佐見町（はさみちょう）。</p>
          <p>
            焼き物の産地として知られるこのまちの一角に、「西の原」という場所があります。
          </p>
          <p>
            ここはもともと、波佐見町で２番目に大きな窯元でした。分業を基本とする波佐見焼にはめずらしく、敷地内ですべての工程が完結するような設備をそなえ、最盛期は200人が働いていたといいます。
          </p>
          <p>
            やがて器産業が下火になるにつれて、規模も縮小し、廃業。そこを現在の運営元である西海陶器株式会社が15年前に買い取り、カフェやショップや切り絵付け体験、ボルダリング場やおにぎり屋さんなど、地域で何かはじめたいという人に向けて開いていくなかで、少しずつ今の「西の原」の形ができあがってきました。
          </p>
          <img src="https://picsum.photos/200/300" alt={"no image"} />
          <p>
            今回は、全部で９つあるなかで最初に生まれた店舗「HANAわくすい」の店長候補を募集します。12月いっぱいで現在の店長が離れることになり、その後任となる人を探しています。
          </p>
          <p>
            何屋さんかと聞かれても、一言では形容しがたいお店です。波佐見焼の器もあれば、服もあるし、おやつも、本も、洗剤も、調味料もある。統一感がないようで、どこか通じるものを感じる、生活を彩るアイテムの数々。この世界観をつくっていく舵取り役が店長だといいます。
          </p>
          <p>
            また、同じく西の原内にある食料品店「GROCERY
            MORISUKE」のスタッフも募集中。
          </p>
          <p>
            経験は問いません。つくり手へのリスペクトをもって、好きなものだけに囲まれて過ごしたい。そんな気持ちが原動力になる仕事です。
          </p>

          <img src="https://picsum.photos/200/301" alt={"no image"} />

          <p>
            原さんは、小さなころから「好きなものだけに囲まれて暮らしたい」と思っていたそうです。
          </p>
          <p>その夢は今、実現しつつあるのかもしれない。</p>
          <p>
            ひとりで何かを目指すのもいいけれど、この舞台と築かれてきた関係性を活かして、喜びを分かち合いながら場をつくっていくのも、きっと素敵なことだと思います。
          </p>

          <p>（2021/9/17 取材　中川晃輔）</p>
          <p>※撮影時はマスクを外していただきました。</p>
        </div>
        {user === undefined ? (
          <div className={styles.registerLinkWrap}>
            <Link href="/register">
              <a className={styles.primary}>会員登録して続きを読む</a>
            </Link>
            <Link href="/login">
              <a>会員の方はこちらからログイン</a>
            </Link>
          </div>
        ) : null}
        <div className={styles.tagsWrap}>
          <Link href={"/?keyword=tag:コミュニケーション"}>
            <a>コミュニケーション</a>
          </Link>
          <Link href={"/?keyword=tag:自分ごと"}>
            <a>自分ごと</a>
          </Link>
          <Link href={"/?keyword=tag:場づくり"}>
            <a>場づくり</a>
          </Link>
          <Link href={"/?keyword=tag:顔が見える"}>
            <a>顔が見える</a>
          </Link>
        </div>
        <hr />
        <h3>西海陶器株式会社</h3>
        <h4>募集職種</h4>
        (1) 雑貨店店長
        <br />
        (2) 輸入食品店スタッフ
        <br />
        <h4>雇用形態</h4>
        (1)(2) 正社員（契約期間の定め無し）
        <br />
        いずれも入社後３カ月は試用期間
        <br />
        <h4>給与</h4>
        (1) 雑貨店店長
        <br />
        月給 19〜21万円
        <br />
        (2) 輸入食品店スタッフ
        <br />
        月給　17〜20万円
        <br />
        いずれも経験を考慮し、面談時に相談の上決定
        <br />
        <h4>待遇・福利厚生</h4>
        ・賞与（年二回、会社実績による）
        <br />
        ・保険（健康保険、雇用保険）
        <br />
        ・退職金制度あり（勤続3年以上）
        <br />
        ・住居（社員寮あり）
        <br />
        ・年金（厚生年金、確定拠出年金）
        <br />
        ・交通費（距離による、上限2万円）
        <br />
        ・育児休業あり
        <br />
        <h4>仕事内容</h4>
        (1) 雑貨店店長
        <br />
        ・雑貨の販売
        <br />
        ・バイイング
        <br />
        ・企画運営
        <br />
        (2) 輸入食料品店スタッフ
        <br />
        ・食品の販売
        <br />
        ・バイイング
        <br />
        <h4>勤務地</h4>
        長崎県東彼杵郡波佐見町井石郷2187-4
        <br />
        <h4>勤務時間</h4>
        10：15～18：15（休憩時間12：00～14：00の間に30分交代制）
        <br />
        <h4>休日休暇</h4>
        週休２日制（水曜日＋シフトによる）年末年始、有給休暇
        <br />
        <h4>応募資格</h4>
        雑貨店で販売経験がある、食に関する仕事をしたことがある方など優先的に考慮します
        <br />
        <h4>求める人物像</h4>
        (1) 雑貨好き、バイイングが出来る、柔軟な考え方ができる
        <br />
        (2) 食に興味がある、オーガニック、ワインに興味がある
        <br />
        どちらも積極的な考えができ、人や物事に敏感に関心をもつことができる
        <br />
        <h4>募集期間</h4>
        2021/10/22～2021/11/05
        <br />
        採用予定人数
        <br />
        各１名
        <br />
        <h4>選考プロセス</h4>
        まずは下記「問い合わせ・応募する」ボタンよりご連絡ください。
        <br />
        採用担当より次の選考についてご案内いたします。
        <br />
        　↓
        <br />
        書類選考
        <br />
        　↓
        <br />
        １次面接
        <br />
        　↓
        <br />
        ２次面接
        <br />
        　↓
        <br />
        採用（試用期間３ヶ月あり）
        <br />
        <br />
        ・取得した個人情報は、採用選考にのみ使用します。
        <br />
        ・選考プロセスは変更になる可能性があります。
        <br />
        ・不採用理由についての問い合わせにはお答えできませんのでご了承ください。
        <br />
        <h4>その他</h4>
        よろしければ、こちらもご覧ください。
        <br />
        ・西海陶器株式会社Webサイト
        <br />
        ・西の原Webサイト
        <br />
        ・Hasami Life | 波佐見焼の通販サイト
        <br />
      </article>
      <a
        href="https://www.sbs-infosys.co.jp/recruit/requirements/index.html"
        className={styles.applyButton}
        target="_blank"
        rel="noopener"
      >
        この求人に応募する
      </a>
      <Footer />
    </div>
  );
};

export default ArticleTemplate;
