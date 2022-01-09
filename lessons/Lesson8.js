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

export const Rest = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Rest.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အနားယူသည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>きゅう (kyuu)</Text>
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
            休む（やすむ）(yasu mu) (အနားယူသည်){"\n"} 休み（やすみ）(yasu mi)
            (အားလပ်ချိန် / အားလပ်ရက်){"\n"} 休日（きゅうじつ）(kyuu jitsu)
            (အားလပ်ရက်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Run = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Run.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ပြေးသည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>そう (sou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>はし (hashi)</Text>
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
            走る（はしる）(hashi ru) (ပြေးသည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const GetUp = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/WakeUp.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>နိုးသည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>き (ki)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>お (o)</Text>
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
            起きる（おきる）(o kiru) (နိုးသည်){"\n"}起こす（おこす）(o kosu)
            (နှိုးသည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Shellfish = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Shellfish.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဂုံးကောင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>-</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>かい (kai)、がい (gai)</Text>
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
            貝（かい）(kai) (ဂုံးကောင်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Buy = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Buy.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဝယ်သည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ばい (bai)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>か (ka)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>12</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            買う（かう）(ka u) (ဝယ်သည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Sell = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Sell.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ရောင်းသည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ばい (bai)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>う (u)</Text>
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
            売る（うる）(u ru) (ရောင်းသည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Read = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Read.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>စာဖတ်သည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            どく (doku)、とく (toku)、とう (tou)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>よ (yo)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>14</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            読む（よむ）(yo mu) (စာဖတ်သည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Write = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Write.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ရေးသည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>しょ (sho)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>か (ka)、が (ga)</Text>
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
            書く（かく）(kaku) (ရေးသည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Return = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Return.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ပြန်သည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>き (ki)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>かえ (kae)、がえ (gae)</Text>
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
            帰る（かえる）(kae ru) (ပြန်သည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const MakeEfforts = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Exertion.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အားစိုက်မှု</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>べん (ben)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>-</Text>
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
            勉強する（べんきょうする）(ben kyou suru) (လေ့လာသည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Bow = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Bow.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>လေး (bow)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>きゅう (kyuu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ゆみ (yumi)</Text>
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
            弓（ゆみ）(yumi) (လေး (bow))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Insect = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Insect.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ပိုးမွှား</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ちゅう (chuu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>むし (mushi)</Text>
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
            虫（むし）(mushi) (ပိုးမွှား)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Strong = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Strong.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သန်မာသော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>きょう (kyou)、ごう (gou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>つよ (tsuyo)、し (shi)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>11</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            強い（つよい）(tsuyo i) (သန်မာသော){"\n"}
            勉強する（べんきょうする）(ben kyou suru) (လေ့လာသည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Hold = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Hold.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဆုပ်ကိုင်သည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>じ (ji)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>も (mo)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>9</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            持つ（もつ）(mo tsu) (ဆုပ်ကိုင်သည်){"\n"}気持ち（きもち）(ki mo chi)
            (စိတ်ခံစားချက်){"\n"}お金持ち（おかねもち）(o kane mo chi) (သူဌေး
            (rich person))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Name = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Name.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>နာမည်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>めい (mei)、みょう (myou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>な (na)</Text>
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
            名前（なまえ）(na mae) (နာမည်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Word = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Language.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ဘာသာစကား</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ご (go)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>かた (kata)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>14</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>
            日本語（にほんご）(ni hon go) (ဂျပန်ဘာသာစကား){"\n"}
            中国語（ちゅうごくご）(chuu goku go) (တရုတ်ဘာသာစကား)
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
