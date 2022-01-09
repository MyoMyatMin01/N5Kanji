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

export const Day = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Sun.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ရက် / နေ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            にち (nichi)、にっ (nit)、じつ (jitsu)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>び (bi)、ひ (hi)、か (ka)</Text>
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
            日本（にほん / にっぽん）(ni hon / nip pon) (ဂျပန်){"\n"}
            日曜日（にちようび）(nichi you bi) (တနင်္ဂနွေနေ့){"\n"}
            今日（きょうか）(kyou ka) (ဒီနေ့)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Month = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Moon.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>လ (moon / month)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>げつ (getsu)、がつ (gatsu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>つき (tsuki)</Text>
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
            月（つき）(tsuki) (လ (moon)){"\n"}月曜日（げつようび）(getsu you bi)
            (တနင်္လာနေ့){"\n"}一月（いちがつ）(ichi gatsu) (January)
            {"\n"}今月（こんげつ）(kon getsu) (ဒီလ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Fire = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Fire.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>မီး</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>か (ka)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ひ (hi)、ほ (ho)</Text>
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
            火（ひ）(hi) (မီး){"\n"}火曜日（かようび）(ka you bi) (အင်္ဂါနေ့)
            {"\n"}花火（はなび）(hana bi) (မီးပန်း)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Water = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Water.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ရေ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>すい (sui)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>みず (mizu)</Text>
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
            水（みず）(mizu) (ရေ){"\n"}水曜日（すいようび）(sui you bi)
            (ဗုဒ္ဓဟူးနေ့)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Tree = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Tree.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သစ်ပင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>もく (moku)、ぼく (boku)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>き (ki)、こ (ko)</Text>
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
            木（き）(ki) (သစ်ပင်){"\n"}木曜日（もくようび）(moku you bi)
            (ကြာသပတေးနေ့)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Gold = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Gold.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ရွှေ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>きん (kin)、こん (kon)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>かね (kane)、かな (kana)</Text>
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
            金（きん）(kin) (ရွှေ){"\n"}お金（おかね）(o kane) (ပိုက်ဆံ)
            {"\n"}金曜日（きんようび）(kin you bi) (သောကြာနေ့)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Soil = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Ground.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>မြေကြီး</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ど (do)、と (to)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>つち (tsuchi)</Text>
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
            土（つち）(tsuchi) (မြေကြီး){"\n"}土曜日（どようび）(do you bi)
            (စနေနေ့)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Weekday = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Weekday.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ရက်သတ္တပတ်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>よう (you)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>-</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>18</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            日曜日（にちようび）(nichi you bi) (တနင်္ဂနွေနေ့){"\n"}
            月曜日（げつようび）(getsu you bi) (တနင်္လာနေ့){"\n"}
            火曜日（かようび）(ka you bi) (အင်္ဂါနေ့)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Book = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Book.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>စာအုပ်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ほん (hon)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>もと (moto)</Text>
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
            本（ほん）(hon) (စာအုပ်){"\n"}日本（にほん / にっぽん）(ni hon / nip
            pon) (ဂျပန်){"\n"}一本（いっぽん）(ip pon) (တစ်ချောင်း)
            {"\n"}二本（にほん）(ni hon) (နှစ်ချောင်း){"\n"}
            三本（さんぼん）(san bon) (သုံးချောင်း)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Person = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Person.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>လူ</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>じん (jin)、にん (nin)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ひと (hito)</Text>
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
            (ဂျပန်လူမျိုး){"\n"}一人（ひとり）(hito ri) (လူတစ်ယောက်){"\n"}
            二人（ふたり）(futa ri) (လူနှစ်ယောက်){"\n"}三人（さんにん）(san nin)
            (လူသုံးယောက်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Now = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Now.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ယခု</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>こん (kon)、きん (kin)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>いま (ima)</Text>
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
            今（いま）(ima) (ယခု){"\n"}今日（きょう）(kyou) (ယနေ့){"\n"}
            今月（こんげつ）(kon getsu) (ဒီလ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Temple = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Temple.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဘုရားကျောင်း</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>じ (ji)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>てら (tera)</Text>
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
            寺（てら）(tera) (ဘုရားကျောင်း){"\n"}寺院（じいん）(ji in)
            (ဘာသာရေးဆိုင်ရာအဆောက်အအုံ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Time = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Time(Toki).gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အချိန်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>じ (ji)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>とき (toki)</Text>
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
            一時（いちじ）(ichi ji) (၁နာရီ){"\n"}時間（じかん）(ji kan)
            (အချိန်ကြာ){"\n"}一時間（いちじかん）(ichi ji kan) (၁နာရီကြာ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Half = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Half.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>တဝက်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>はん (han)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>なか (naka)</Text>
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
            二時半（にじはん）(ni ji han) (နှစ်နာရီခွဲ){"\n"}
            三時半（さんじはん）(san ji han) (သုံးနာရီခွဲ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Sword = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Sword.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဓား (ကင်ဒို)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>とう (tou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>かたな (katana)</Text>
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
            刀（かたな）(katana) (ဓား (ကင်ဒို))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Minute = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Minute.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>မိနစ်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            ふん (fun)、ぶん (bun)、ぶ (bu)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>わ (wa)</Text>
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
            半分（はんぶん）(han bun) (တဝက်){"\n"}一分（いっぷん）(ip pun)
            (၁မိနစ်){"\n"}二分（にふん）(ni bun) (နှစ်မိနစ်)
            {"\n"}分かる（わかる）(wa karu) (နားလည်သဘောပေါက်သည်)
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
