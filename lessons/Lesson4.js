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

export const RiceField = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/RiceField.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>လယ်ကွင်း</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>でん (den)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>た (ta)、だ (da)</Text>
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
            田中さん（たなかさん）(ta naka san) (Mr. Tanaka){"\n"}
            田んぼ（たんぼ）(tan bo) (လယ်ကွင်း)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Power = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Power.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ခွန်အား</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            りき (riki)、りょく (ryoku)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ちから (chikara)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>2</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            力（ちから）(chikara) (ခွန်အား)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Man = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Man.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ယောင်္ကျား (man)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>だん (dan)、なん (nan)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>おとこ (otoko)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>7</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          男（おとこ）(otoko) (ယောင်္ကျား (man))
        </Text>
      </Text>
    </ScrollView>
    </View>
  );
};

export const Woman = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Woman.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>မိန်းမ (woman)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            じょ (jyo)、にょ (nyo)、にょう (nyou)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>おんな (onna)、め (me)</Text>
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
            女（おんな）(onna) (မိန်းမ (woman))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Child = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Child(Ko).gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ကလေး</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>し (shi)、す (su)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>こ (ko)</Text>
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
            男の子（おとこのこ）(otoko no ko) (ယောင်္ကျားလေး){"\n"}
            女の子（おんなのこ）(onna no ko) (မိန်းကလေး)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Learning = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/School(Gaku).gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သင်ယူခြင်း</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>がく (gaku)、がっ (gat)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>まな (mana)</Text>
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
            学生（がくせい）(gaku sei) (ကျောင်းသား)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Birth = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Live(Sei).gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>မွေးဖွားခြင်း</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>せい (sei)、じょう (jou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>
            う (u)、い (i)、は (ha)、なま (nama)、お (o)、き (ki)
          </Text>
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
            学生（がくせい）(gaku sei) (ကျောင်းသား){"\n"}
            先生（せんせい）(sen sei) (ဆရာ){"\n"}生まれる（うまれる）(u mareru)
            (မွေးဖွားသည်){"\n"}生きる（いきる）(i kiru) (နေထိုင်သည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Ahead = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Teacher.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အရင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>せん (sen)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>さき (saki)</Text>
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
            先に（さきに）(saki ni) (အရင်){"\n"}先生（せんせい）(sen sei) (ဆရာ)
            {"\n"}先月（せんげつ）(sen getsu) (အရင်လ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const What = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/What.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဘာလဲ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>か (ka)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>なに (nani)、なん (nan)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>7</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            何（なに / なん）(nani / nan) (ဘာလဲ){"\n"}何時（なんじ）(nan ji)
            (ဘယ်အချိန်){"\n"}何曜日（なんようび）(nan you bi) (ဘာနေ့){"\n"}
            何か（なにか）(nani ka) (တစ်ခုခု)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Father = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Father.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အဖေ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ふ (fu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ちち (chichi)</Text>
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
            父（ちち）(chichi) (အဖေ (မိမိအဖေ)){"\n"}お父さん（おとうさん）(o tou
            san) (အဖေ (တခြားသူ၏အဖေ))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Mother = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Mother.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အမေ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ぼ (bo)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>はは (haha)</Text>
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
            母（はは）(haha) (အမေ (မိမိအမေ)){"\n"}お母さん（おかあさん）(o kaa
            san) (အမေ (တခြားသူ၏အမေ))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Year = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Year.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>နှစ် (year)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ねん (nen)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>とし (toshi)</Text>
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
            一年（いちねん）(ichi nen) (တစ်နှစ်){"\n"}今年（ことし）(ko toshi)
            (ဒီနှစ်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Past = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Past.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အတိတ် / ထွက်ခွာသည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>きょ (kyo)、こ (ko)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>さ (sa)</Text>
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
            去年（きょねん）(kyo nen) (လွန်ခဲ့တဲ့နှစ် (last year)){"\n"}
            去る（さる）(sa ru) (ထွက်ခွာသည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Every = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Every.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အားလုံး</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>まい (mai)</Text>
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
            毎日（まいにち）(mai nichi) (နေ့တိုင်း){"\n"}
            毎月（まいつき）(mai tsuki) (လတိုင်း){"\n"}毎年（まいとし /
            まいねん）(mai toshi / mai nen) (နှစ်တိုင်း)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const King = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/King.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဘုရင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>おう (ou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>-</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>4</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>王（おう）(ou) (ဘုရင်)</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Country = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Country.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>နိုင်ငံ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            こく (koku)、ごく (goku)、こっ (kot)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>くに (kuni)</Text>
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
            国（くに）(kuni) (နိုင်ငံ){"\n"}外国（がいこく）(gai koku)
            (နိုင်ငံခြား){"\n"}中国（ちゅうごく）(chuu goku) (တရုတ်နိုင်ငံ)
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
