import { View } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, ScrollView } from "react-native";

import {
  styles,
  meaning,
  onyomi,
  kunyomi,
  strokeCount,
  vocabulary,
  meaningTab,
  onyomiTab,
  kunyomiTab,
  strokeCountTab,
  vocabularyTab,
} from "../screens/Main";

export const Big = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Big.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ကြီးသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>だい (dai)、たい (tai)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>おお (oo)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>3</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            大きい（おおきい）(oo kii) (ကြီးသော){"\n"}大学（だいがく）(dai gaku)
            (တက္ကသိုလ်){"\n"}大学生（だいがくせい）(dai gaku sei)
            (တက္ကသိုလ်ကျောင်းသား)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Small = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Small.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သေးသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>しょう (shou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>
            ちい (chii)、こ (ko)、お (o)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>3</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            小さい（ちいさい）(chii sai) (သေးသော){"\n"}
            小学生（しょうがくせい）(shou gaku sei) (မူကြိုကျောင်းသား)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const High = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Expensive.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>စျေးကြီးသော / မြင့်သော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>こう (kou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>たか (taka)、だか (daka)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>10</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            高い（たかい）(taka i) (စျေးကြီးသော / မြင့်သော){"\n"}
            高校（こうこう）(kou kou) (အထက်တန်းကျောင်း)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Cheap = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Cheap.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>စျေးပေါသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>あん (an)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>やす (yasu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>6</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            安い（やすい）(yasu i) (စျေးပေါသော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const New = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/New.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သစ်လွင်သော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>しん (shin)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>
            あたら (atara)、あら (ara)、にい (nii)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>13</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            新しい（あたらしい）(atara shii) (သစ်လွင်သော){"\n"}
            新聞（しんぶん）(shin bun) (သတင်းစာ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Old = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Old.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အိုဟောင်းသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>こ (ko)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ふる (furu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>5</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            古い（ふるい）(furu i) (အိုဟောင်းသော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Origin = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Origin.gif")}
          style={styles.image}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.desTitleContainer}>
          <MeaningComponent />
          <Text style={styles.desTitleStyle}>{onyomi}</Text>
          <Text style={styles.desTitleStyle}>{kunyomi}</Text>
          <StrokeAndExampleComponent />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.desContentStyle}>မူလ</Text>
          <Text style={styles.desContentStyle}>げん (gen)、がん (gan)</Text>
          <Text style={styles.desContentStyle}>もと (moto)</Text>
          <Text style={styles.desContentStyle}>4</Text>
          <Text style={styles.desContentStyle}>
            元気な（げんきな）(gen ki na) (ကျန်းမာသော)
          </Text>
        </View>
      </View>
    </View>
  );
};

export const Spirit = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Soul.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>စိတ်ဓာတ်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>き (ki)、け (ke)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>-</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>6</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            元気な（げんきな）(gen ki na) (ကျန်းမာသော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Many = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Many.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>များပြားသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>た (ta)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>おお (oo)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>6</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            多い（おおい）(oo i) (များပြားသော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Little = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/ALittle(Sukoshi).gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>နည်းပါးသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>しょう (shou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>すく (suku)、すこ (suko)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>4</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            少ない（すくない）(suku nai) (နည်းပါးသော){"\n"}
            少し（すこし）(suko shi) (အနည်းငယ်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Spacious = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Spacious.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ကျယ်ဝန်းသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>こう (kou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ひろ (hiro)、びろ (biro)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>5</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            広い（ひろい）(hiro i) (ကျယ်ဝန်းသော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Early = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Early.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>စောသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>そう (sou)、さっ (sat)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>はや (haya)、ばや (baya)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>6</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            早い（はやい）(haya i) (စောသော){"\n"}早く（はやく）(haya ku)
            (စောစော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Long = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Long.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ရှည်လျားသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ちょう (chou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>なが (naga)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>8</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            長い（ながい）(naga i) (ရှည်လျားသော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Bright = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Bright.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>တောက်ပသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>めい (mei)、みょう (myou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>
            あか (aka)、あ (a)、あき (aki)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>8</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            明るい（あかるい）(aka rui) (တောက်ပသော){"\n"}明日（あした / あす /
            みょうにち）(ashita / a su / myou nichi) (မနက်ဖြန်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Like = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Like.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ကြိုက်နှစ်သက်သော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>こう (kou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>す (su)、この (kono)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>6</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            好きな（すきな）(su kina) (ကြိုက်နှစ်သက်သော){"\n"}
            大好きな（だいすきな）(dai su kina) (အရမ်းကြိုက်နှစ်သက်သော)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Friend = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Friend.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သူငယ်ချင်း</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ゆう (yuu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>とも (tomo)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>4</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            友達（ともだち）(tomo dachi) (သူငယ်ချင်း)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

const lessonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
