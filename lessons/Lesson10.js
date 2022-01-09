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

export const Mountain = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Mountain.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>တောင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>さん (san)、ざん (zan)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>やま (yama)</Text>
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
            山（やま）(yama) (တောင်){"\n"}山田さん（やまださん）(yama da san)
            (Mr. Yamada)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const River = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/River.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>မြစ် (river)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>せん (sen)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>かわ (kawa)、がわ (gawa)</Text>
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
            川（かわ）(kawa) (မြစ် (river)){"\n"}小川（おがわ）(o gawa) (ချောင်း
            (stream))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const SmallForest = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/SmallForest.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သစ်တောငယ်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>りん (rin)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>
            はやし (hayashi)、ばやし (bayashi)
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
            林（はやし）(hayashi) (သစ်တောငယ်)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Forest = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Forest.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>သစ်တော</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>しん (shin)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>もり (mori)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>12</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>森（もり）(mori) (သစ်တော)</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Sky = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Sky.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ကောင်းကင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>くう (kuu)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>
            そら (sora)、から (kara)、ぞら (zora)、あ (a)
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
            空（そら）(sora) (ကောင်းကင်){"\n"}空気（くうき）(kuu ki) (လေ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Sea = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Sea.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ပင်လယ်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>かい (kai)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>うみ (umi)</Text>
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
            海（うみ）(umi) (ပင်လယ်){"\n"}海外（かいがい）(kai gai)
            (ပင်လယ်ရပ်ခြား)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Change = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Change.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ပြောင်းလဲမှု</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>か (ka)、け (ke)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>ば (ba)</Text>
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
            化学（かがく）(ka gaku) (ဓာတုဗေဒ)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Flower = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Flower.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ပန်း</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>か (ka)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>はな (hana)、ばな (bana)</Text>
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
            花（はな）(hana) (ပန်း){"\n"}花火（はなび）(hana bi) (မီးပန်း){"\n"}
            花見（はなみ）(hana mi) (ပန်းကြည့်ခြင်း)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Heaven = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Heaven.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ကောင်းကင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>てん (ten)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>あま (ama)、あめ (ame)</Text>
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
            天気（てんき）(ten ki) (ရာသီဥတု)
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Red = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Red.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အနီရောင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            せき (seki)、しゃく (shaku)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>あか (aka)</Text>
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
            赤（あか）(aka) (အနီရောင်){"\n"}赤い（あかい）(aka i) (အနီရောင်
            (adjective))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Blue = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Blue.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အပြာရောင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>せい (sei)、しょう (shou)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>あお (ao)</Text>
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
            青（あお）(ao) (အပြာရောင်){"\n"}
            青い（あおい）(ao i) (အပြာရောင် (adjective))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const White = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/White.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အဖြူရောင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            はく (haku)、びゃく (byaku)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>しろ (shiro)、しら (shira)</Text>
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
            白（しろ）(shiro) (အဖြူရောင်){"\n"}
            白い（しろい）(shiro i) (အဖြူရောင် (adjective))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Black = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Black.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အမဲရောင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>こく (koku)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>くろ (kuro)</Text>
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
            黒（くろ）(kuro) (အမဲရောင်){"\n"}黒い（くろい）(kuro i) (အမဲရောင်
            (adjective))
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Color = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Color.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>အရောင်</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>
            しょく (shoku)、しき (shiki)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>いろ (iro)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>6</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>色（いろ）(iro) (အရောင်)</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Fish = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Fish.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ငါး</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>ぎょ (gyo)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>
            うお (uo)、さかな (sakana)、ざかな (zakana)
          </Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {strokeCount}
          {strokeCountTab}
          <Text style={styles.desContentStyle}>11</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {vocabulary}
          {vocabularyTab}
          <Text style={styles.desContentStyle}>魚（さかな）(sakana) (ငါး)</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const Dog = () => {
  return (
    <View style={lessonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/N5Kanji/Dog.gif")}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.desTitleStyle}>
          {meaning}
          {meaningTab}
          <Text style={styles.desContentStyle}>ခွေး</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {onyomi}
          {onyomiTab}
          <Text style={styles.desContentStyle}>けん (ken)</Text>
        </Text>
        <Text style={styles.desTitleStyle}>
          {kunyomi}
          {kunyomiTab}
          <Text style={styles.desContentStyle}>いぬ (inu)</Text>
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
            犬（いぬ）(inu) (ခွေး){"\n"}子犬（こいぬ）(ko inu) (ခွေး)
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
