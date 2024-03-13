<template>
  <div class="container_fluid">
    <div
      class="d-flex align-center flex-column justify-space-between"
      v-if="isLoadQuiz & !isPreloadQuiz"
    >
      <!-- <div>
        <h2 class="text-center ml-2 mt-10">{{ selectDictionary }} <span> <v-btn small color="success" rounded
              @click="swap()">
              <v-icon>{{ mdiSwapHorizontal }}</v-icon>
            </v-btn></span></h2>
        <div v-for="(n, i) in 7" :key="n">
          <v-btn class="my-3" :color="colorIndex[i]" rounded @click="letterLength(n + 1)">
            <p>{{ n + 1 }} Letters Word</p>
          </v-btn>


        </div>

      </div> -->
    </div>
    <div v-if="isLoadQuiz & isPreloadQuiz">
      <v-overlay>
        <!-- <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular> -->
        <h1>Loading Quiz...</h1>
      </v-overlay>
    </div>

    <!-- <div style="background-color: rgb(129, 127, 255);padding-top: 12px;padding-bottom: 12px;color: white; width: 100%;"></div> -->
    <div
      class="d-flex align-center flex-column justify-space-between"
      v-if="!isLoadQuiz & !isPreloadQuiz"
    >
      <h3 class="mt-2 mb-0">
        {{ selectDictionary.toUpperCase().replace("LEXICON_", "") }}:
        <span>{{ type.replace("list_", "").toUpperCase() }}</span>
      </h3>
      <h3 class="mt-2 mb-0">Name : {{ quizName }}</h3>
      <div class="text-banner pa-2">
        <div class="text-banner-inner pa-1">
          <v-card
            @drop.prevent="onDrop1($event)"
            @dragover.prevent="dragover1 = true"
            @dragenter.prevent="dragover1 = true"
            @dragleave.prevent="dragover1 = false"
            :class="{ 'grey lighten-2': dragover1 }"
          >
            <div v-if="letterBlock[0].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[0].letter}.png`)"
              />
            </div>
          </v-card>
          <v-card
            @drop.prevent="onDrop2($event)"
            @dragover.prevent="dragover2 = true"
            @dragenter.prevent="dragover2 = true"
            @dragleave.prevent="dragover2 = false"
            :class="{ 'grey lighten-2': dragover2 }"
          >
            <div v-if="letterBlock[1].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[1].letter}.png`)"
              />
            </div>
          </v-card>
          <v-card
            @drop.prevent="onDrop3($event)"
            @dragover.prevent="dragover3 = true"
            @dragenter.prevent="dragover3 = true"
            @dragleave.prevent="dragover3 = false"
            :class="{ 'grey lighten-2': dragover3 }"
          >
            <div v-if="letterBlock[2].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[2].letter}.png`)"
              />
            </div>
          </v-card>
          <v-card
            @drop.prevent="onDrop4($event)"
            @dragover.prevent="dragover4 = true"
            @dragenter.prevent="dragover4 = true"
            @dragleave.prevent="dragover4 = false"
            :class="{ 'grey lighten-2': dragover4 }"
          >
            <div v-if="letterBlock[3].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[3].letter}.png`)"
              />
            </div>
          </v-card>
          <v-card
            @drop.prevent="onDrop5($event)"
            @dragover.prevent="dragover5 = true"
            @dragenter.prevent="dragover5 = true"
            @dragleave.prevent="dragover5 = false"
            :class="{ 'grey lighten-2': dragover5 }"
          >
            <div v-if="letterBlock[4].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[4].letter}.png`)"
              />
            </div>
          </v-card>
          <v-card
            @drop.prevent="onDrop6($event)"
            @dragover.prevent="dragover6 = true"
            @dragenter.prevent="dragover6 = true"
            @dragleave.prevent="dragover6 = false"
            :class="{ 'grey lighten-2': dragover6 }"
          >
            <div v-if="letterBlock[5].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[5].letter}.png`)"
              />
            </div>
          </v-card>
          <v-card
            @drop.prevent="onDrop7($event)"
            @dragover.prevent="dragover7 = true"
            @dragenter.prevent="dragover7 = true"
            @dragleave.prevent="dragover7 = false"
            :class="{ 'grey lighten-2': dragover7 }"
          >
            <div v-if="letterBlock[6].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[6].letter}.png`)"
              />
            </div>
          </v-card>
          <v-card
            @drop.prevent="onDrop8($event)"
            @dragover.prevent="dragover8 = true"
            @dragenter.prevent="dragover8 = true"
            @dragleave.prevent="dragover8 = false"
            :class="{ 'grey lighten-2': dragover8 }"
          >
            <div v-if="letterBlock[7].letter.length > 0">
              <img
                :src="require(`@/static/alphabet/${letterBlock[7].letter}.png`)"
              />
            </div>
          </v-card>
        </div>
      </div>
      <div class="mt-2">
        <div
          v-if="
            (savelist[quizindex].Leftover.length == 0) &
            (savelist[quizindex].Correct.length == 0)
          "
        >
          {{ quizanswer.length }} Leftover (s)
        </div>
        <div
          v-if="
            (savelist[quizindex].Leftover.length == 0) &
            (savelist[quizindex].Correct.length == 0)
          "
        >
          {{ quizcorrectlist.length }} Correct answer (s)
        </div>
        <div
          v-if="
            savelist[quizindex].Leftover.length > 0 ||
            savelist[quizindex].Correct.length > 0
          "
        >
          {{ savelist[quizindex].Leftover.length }} Leftover (s)
        </div>
        <div
          v-if="
            savelist[quizindex].Leftover.length > 0 ||
            savelist[quizindex].Correct.length > 0
          "
        >
          {{ savelist[quizindex].Correct.length }} Correct answer (s)
        </div>
      </div>

      <div>
        <v-btn color="" @click="confirmback()">
          <v-icon>{{ mdiHomeOutline }}</v-icon>
        </v-btn>
        <v-btn color="yellow" @click="showHint()">
          <v-icon color="">{{ mdiLightbulbOn10 }}</v-icon>
        </v-btn>
        <v-btn color="green" @click="confirmsave()">
          <v-icon>{{ mdiContentSaveOutline }}</v-icon>
        </v-btn>
        <v-btn color="blue" @click="showDetail()">
          <v-icon>{{ mdiFileChartOutline }}</v-icon>
        </v-btn>
      </div>
      <!-- <div class="mt-2">
        <v-icon large color="blue darken-2" @click="confirmback()">{{ mdiHomeOutline }}</v-icon>
        <v-icon large color="orange darken-2" @click="showHint()">{{ mdiLightbulbOn10 }}</v-icon>
        <v-icon large color="green darken-2" @click="confirmsave()">{{ mdiContentSaveOutline }}</v-icon>
        <v-icon large color="red darken-2" @click="confirmdelete()">{{ mdiDeleteOutline }}</v-icon>
       
      </div> -->

      <div class="answer-box">
        <div class="answer-box-inner">
          <!-- not answer yet -->
          <span
            v-if="
              (quizcorrectlist.length > 0) &
              (savelist[quizindex].Leftover.length == 0) &
              (savelist[quizindex].Correct.length == 0)
            "
            class="ml-1 mr-1"
            style="color: green"
            v-for="(item, index) in quizcorrectlist"
            :key="item"
          >
            {{ item }}</span
          >
          <span
            v-if="
              isShowAnswer &
              (savelist[quizindex].Leftover.length == 0) &
              (savelist[quizindex].Correct.length == 0)
            "
            class="ml-1 mr-1"
            v-for="(item, index) in quizanswer"
            :key="item"
          >
            {{ item }}</span
          >
          <!-- already do it -->
          <span
            v-if="savelist[quizindex].Correct.length > 0"
            class="ml-1 mr-1"
            style="color: green"
            v-for="(item, index) in savelist[quizindex].Correct"
            :key="item.Correct"
          >
            {{ item }}</span
          >
          <span
            v-if="savelist[quizindex].Leftover.length > 0"
            class="ml-1 mr-1"
            v-for="(item, index) in savelist[quizindex].Leftover"
            :key="item.Leftover"
          >
            {{ item }}</span
          >
        </div>
      </div>
      <div class="d-flex justify-space-between align-center mt-2 mb-2">
        <v-btn fab class="" color="indigo" small @click="latestPrev()">
          <v-icon color="white">{{ mdiChevronDoubleLeft }}</v-icon>
        </v-btn>
        <v-btn
          fab
          class="ml-8"
          color="indigo"
          small
          @click="prev()"
          :disabled="isDisablePrev"
        >
          <v-icon color="white">{{ mdiChevronLeft }}</v-icon>
        </v-btn>

        <h6 style="cursor: pointer" class="mx-5" @click="showPage()">
          {{ quizindex + 1 }} / {{ quizlist.length }}
        </h6>

        <!-- <v-select v-click-outside="() => { isShowPage = false }"
          style="max-width: 100px; font-size: 14px; background-color: transparent;" class="px-3 pb-0 pt-0 mt-0 mb-0"
          v-if="isShowPage" v-model="pageCurrent" :items="pageArray" hide-details dense @change="changePage"  menu-props="auto">

        </v-select> -->
        <v-dialog v-model="isShowPage" max-width="340">
          <v-card>
            <v-card-title class="d-flex justify-center text-h6 pb-0">
              Go to Page
            </v-card-title>
            <div class="d-flex justify-center align-center text-h6 mt-2 pb-2">
              <v-text-field
                style="max-width: 100px"
                v-model="fillValue"
                disabled
                solo
                hide-details
              ></v-text-field>
              <h5 class="ml-2">/ {{ pageLatest }}</h5>
              <v-btn color="success" class="ml-2" @click="goToPage()">Go</v-btn>
            </div>
            <div
              class="d-flex justify-start align-center mt-2 pb-2 px-3"
              style="width: 100%; flex-wrap: wrap"
            >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(0)"
                >0</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(1)"
                >1</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(2)"
                >2</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(3)"
                >3</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(4)"
                >4</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(5)"
                >5</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(6)"
                >6</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(7)"
                >7</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(8)"
                >8</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="inputValue(9)"
                >9</v-btn
              >
              <v-btn
                small
                color="#817FFF"
                class="ml-2 mt-1"
                dark
                @click="deleteValue()"
                ><v-icon>{{ mdiArrowLeftBoldOutline }}</v-icon></v-btn
              >
            </div>
          </v-card>
        </v-dialog>

        <v-btn
          fab
          class="mr-8"
          color="indigo"
          small
          @click="next()"
          :disabled="isDisableNext"
          ><v-icon color="white">{{ mdiChevronRight }}</v-icon></v-btn
        >
        <v-btn fab class="" color="indigo" small @click="latestNext()"
          ><v-icon color="white">{{ mdiChevronDoubleRight }}</v-icon></v-btn
        >
      </div>
      <div style="height: 38px" v-if="quizletter.length == 0"></div>
      <div class="letter-box">
        <img
          v-for="(item, index) in quizletter"
          :key="index"
          class="letter-piece"
          :src="require(`@/static/alphabet/${item.toLowerCase()}.png`)"
          @click="stringPush(item.toLowerCase(), index)"
        />
      </div>

      <div class="assist-menu">
        <div>
          <v-btn color="success" @click="check()" :disabled="isDisable">
            <v-icon>{{ mdiCheck }}</v-icon>
          </v-btn>
          <v-btn
            color="warning"
            @click="letterOut()"
            :disabled="isDisableCancel"
          >
            <v-icon>{{ mdiMinus }}</v-icon>
          </v-btn>
          <v-btn color="error" @click="clear()" :disabled="isDisableCancel">
            <v-icon>{{ mdiNotificationClearAll }}</v-icon>
          </v-btn>
          <v-btn color="" @click="shuffle()">
            <v-icon>{{ mdiRefresh }}</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      centered
      tile
      color="red accent-2"
    >
      <p class="d-flex justify-center">{{ textIncorrect }}</p>
    </v-snackbar>
    <v-snackbar
      v-model="snackbarCorrect"
      :timeout="timeout"
      centered
      tile
      color="success accent-2"
    >
      <p class="d-flex justify-center">{{ textCorrect }}</p>
    </v-snackbar>
    <v-dialog v-model="dialog" persistent max-width="340">
      <v-card>
        <v-card-title class="text-h6 text-center pb-0" v-if="!isCreateQuiz">
          Error occured.
        </v-card-title>
        <v-card-title class="text-h6 text-center pb-0" v-if="isCreateQuiz">
          Creating Database...
        </v-card-title>
        <div class="d-flex justify-center my-3">
          <v-progress-circular
            v-if="isCreateQuiz"
            :size="50"
            :width="7"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </div>
        <v-card-text v-if="!isCreateQuiz" class="text-center"
          >Maybe a mismatch between your data.</v-card-text
        >
        <v-card-text v-if="!isCreateQuiz" class="text-center">
          Please make sure that your lexicon or your list has been
          created.</v-card-text
        >

        <v-card-text v-if="!isCreateQuiz" class="text-center"
          >Return to home screen.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn v-if="!isCreateQuiz" color="deep-purple darken-1" text @click="back()">
            No
          </v-btn> -->
          <v-btn
            v-if="!isCreateQuiz"
            color="deep-purple darken-1"
            text
            @click="createDatabase()"
          >
            Ok
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="isConfirmSave" persistent max-width="340">
      <v-overlay v-if="isSave & !isSaveComplete">
        <h1 v-if="isSave & !isSaveComplete" class="text-center pb-0">
          Saving...
        </h1>
      </v-overlay>
      <v-card v-if="!isSave">
        <v-card-title v-if="!isSave" class="text-h6 text-center pb-5"
          >Do you want to save ?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!isSave"
            color="deep-purple darken-1"
            text
            @click="isConfirmSave = false"
          >
            No
          </v-btn>
          <v-btn
            v-if="!isSave"
            color="deep-purple darken-1"
            text
            @click="commitSave()"
          >
            Yes
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-card v-if="isSave & isSaveComplete">
        <h2 class="text-center pt-5 pb-5">Save complete</h2>
        <div class="d-flex justify-center">
          <v-icon :size="80" color="green darken-2">{{
            mdiCheckCircleOutline
          }}</v-icon>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isConfirmDelete" persistent max-width="340">
      <v-overlay v-if="isDelete & !isDeleteComplete">
        <h1 v-if="isDelete & !isDeleteComplete" class="text-center pb-0">
          Deleting...
        </h1>
      </v-overlay>
      <v-card v-if="!isDelete">
        <v-card-title v-if="!isDelete" class="text-h6 text-center pb-0"
          >Do you want to delete ?</v-card-title
        >
        <v-card-text v-if="!isDelete" class="text-center pt-3 pb-0"
          >Your progress will be lost permanently.
        </v-card-text>
        <v-card-title
          v-if="isDelete & !isDeleteComplete"
          class="text-h6 text-center pb-0"
          >Deleting...</v-card-title
        >
        <h2 v-if="isDelete & isDeleteComplete" class="text-center pt-8 pb-0">
          Delete complete
        </h2>
        <div
          class="d-flex justify-center mt-3"
          v-if="isDelete & isDeleteComplete"
        >
          <v-icon :size="80" color="green darken-2">{{
            mdiCheckCircleOutline
          }}</v-icon>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!isDelete"
            color="deep-purple darken-1"
            text
            @click="isConfirmDelete = false"
          >
            No
          </v-btn>
          <v-btn
            v-if="!isDelete"
            color="deep-purple darken-1"
            text
            @click="commitDelete()"
          >
            Yes
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-card v-if="isDelete & isDeleteComplete">
        <h2 class="text-center pt-5 pb-5">Delete complete</h2>
        <div class="d-flex justify-center">
          <v-icon :size="80" color="green darken-2">{{
            mdiCheckCircleOutline
          }}</v-icon>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="isConfirmBack" persistent max-width="340">
      <v-card>
        <v-card-title class="text-h6 text-center pb-0"
          >Return to home screen ?</v-card-title
        >
        <v-card-text class="text-center pt-5 pb-0"
          >Your progress will be lost permanently if you do not save any
          progress.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="deep-purple darken-1"
            text
            @click="isConfirmBack = false"
          >
            No
          </v-btn>
          <v-btn color="deep-purple darken-1" text @click="back()"> Yes </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isShowDetail" persistent max-width="340">
      <v-card class="pa-2">
      <v-tabs v-model="tabindex" centered :color="tabindex == 0 ? `green` : `red`">
        <v-tab>Correct</v-tab>
        <v-tab>Miss</v-tab>
      </v-tabs>
      <div class="mt-2 d-flex justify-center" v-if="tabindex == 0">Total: {{ allCorrect }} Words</div>
      <div class="mt-2 d-flex justify-center" v-if="tabindex == 1">Total: {{ allMiss }} Words</div>
      <div style="height: 300px; width: 100%; overflow: auto; margin-top: 12px; border:1px dotted">
      <div class="pa-2 d-flex flex-column" v-if="tabindex == 0">
        <div class="d-flex flex-column justify-center" style="width: 100%;" v-for="(item, index) in filterCorrect" :key="index">
          
          <div style="background-color: rgb(129, 127, 255);">
            <v-divider></v-divider>
            <p class="ml-2">Page: {{ item.Id }}</p>
            <v-divider></v-divider>
      </div>
          <div><p class="text-center" v-for="(x,i) in item.Correct" :key="i">{{ x }}</p></div>
          
        </div>
      </div>
      <div class="pa-2 d-flex flex-column" v-if="tabindex == 1">
        <div class="d-flex flex-column" style="width: 100%;" v-for="(item, index) in filterMiss" :key="index">
          <div style="background-color: rgb(129, 127, 255);">
            <v-divider></v-divider>
            <p class="ml-2">Page: {{ item.Id }}</p>
            <v-divider></v-divider>
      </div>
      <div>
        <p class="text-center" v-for="(x,i) in item.Leftover" :key="i">{{ x }}</p>
      </div>
        </div>
      </div>
    </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple darken-1" text @click="isShowDetail = false">
          Close
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
     
    </v-card>
    </v-dialog>

    <div class="navation-drawer"></div>
  </div>
</template>

<script>
import Dexie from "dexie";
import { mdiChevronDoubleLeft } from "@mdi/js";
import { mdiChevronDoubleRight } from "@mdi/js";
import { mdiLightbulbOn10 } from "@mdi/js";
import { mdiRefresh } from "@mdi/js";
import { mdiSwapHorizontal } from "@mdi/js";
import { mdiContentSaveOutline } from "@mdi/js";
import { mdiCheckCircleOutline } from "@mdi/js";
import { mdiDeleteOutline } from "@mdi/js";
import { mdiHomeOutline } from "@mdi/js";
import { mdiBookOpenPageVariantOutline } from "@mdi/js";
import { mdiCheckOutline } from "@mdi/js";
import { mdiAccountBoxMultipleOutline } from "@mdi/js";
import { mdiDotsVertical } from "@mdi/js";
import { mdiCogs } from "@mdi/js";
import { mdiCheck } from "@mdi/js";
import { mdiMinus } from "@mdi/js";
import { mdiNotificationClearAll } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
import { mdiArrowLeftBoldOutline } from "@mdi/js";
import { mdiCounter } from "@mdi/js";
import { mdiFileChartOutline } from "@mdi/js";
import { twl06_db } from "@/static/twl06_db.js";
import { csw21_db } from "@/static/csw21_db.js";
import { nwl2022_db } from "@/static/nwl2022_db.js";
export default {
  name: "Quiz",
  props: {
    lexicon: { type: String },
    type: { type: String },
    quizName: { type: String },
    genType: { type: String },
    sortType: { type: String },
  },
  data() {
    return {
      mdiChevronDoubleLeft,
      mdiChevronDoubleRight,
      mdiLightbulbOn10,
      mdiRefresh,
      mdiSwapHorizontal,
      mdiContentSaveOutline,
      mdiCheckCircleOutline,
      mdiDeleteOutline,
      mdiHomeOutline,
      mdiBookOpenPageVariantOutline,
      mdiCheckOutline,
      mdiAccountBoxMultipleOutline,
      mdiCogs,
      mdiCheck,
      mdiMinus,
      mdiNotificationClearAll,
      mdiDotsVertical,
      mdiChevronLeft,
      mdiChevronRight,
      mdiArrowLeftBoldOutline,
      mdiCounter,
      mdiFileChartOutline,
      dragover1: false,
      dragover2: false,
      dragover3: false,
      dragover4: false,
      dragover5: false,
      dragover6: false,
      dragover7: false,
      dragover8: false,
      tabindex: 0,
      twl06list: [],
      csw21list: [],
      wordlist: [],
      search: "",
      fieldsearch: [],
      selectItems: "Exact Word",
      Category: [
        "Exact Word",
        "Include Word",
        "Begin With",
        "End With",
        "Anagram",
        "Subanagram",
      ],
      selectLength: 0,
      Length: [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ],
      selectDictionary: "twl06",
      Dictionary: ["twl06", "csw21", "nwl2022"],
      isSearch: false,
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      loading: false,
      vocab: "",
      definition: "",
      isShowDefinition: false,
      title: "",
      isDisable: true,
      headers: [
        {
          text: "Front Hook",
          align: "start",
          sortable: false,
          value: "Front",
        },
        {
          text: "Words",
          align: "start",
          sortable: false,
          value: "Word",
        },
        {
          text: "Back Hook",
          align: "start",
          sortable: false,
          value: "Back",
        },
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      subAnagramFilter: [],
      filter_array: [],
      filter_noveltry_twl: [],
      filter_noveltry_csw: [],
      success_array: [],
      success_noveltry_twl: [],
      success_noveltry_csw: [],
      cswBanner: [],
      duplicateAlphabet: [],
      pathPicture: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "blank",
      ],
      letterBlock: [
        {
          block: "1",
          letter: "",
        },
        {
          block: "2",
          letter: "",
        },
        {
          block: "3",
          letter: "",
        },
        {
          block: "4",
          letter: "",
        },
        {
          block: "5",
          letter: "",
        },
        {
          block: "6",
          letter: "",
        },
        {
          block: "7",
          letter: "",
        },
        {
          block: "8",
          letter: "",
        },
        {
          block: "9",
          letter: "",
        },
      ],
      letterCount: 0,
      sublist: [],
      quizlist: [],
      quizletter: "",
      quizletterreserve: [],
      quizindex: 0,
      quizanswer: [],
      quizconfirm: [],
      quizcorrectlist: [],
      savelist: [],
      isShowAnswer: false,
      isDisable: false,
      isDisablePrev: true,
      isDisableNext: false,
      isPreloadQuiz: false,
      isLoadQuiz: true,
      isDisableCancel: true,
      snackbar: false,
      snackbarCorrect: false,
      textIncorrect: "Incorrect",
      textCorrect: "Correct",
      timeout: 1000,
      colorIndex: [
        "green",
        "red",
        "indigo",
        "pink",
        "blue",
        "orange",
        "purple",
      ],
      errorText: "",
      dialog: false,
      isCreateQuiz: false,
      isConfirmSave: false,
      isConfirmDelete: false,
      isShowDetail: false,
      saveName: "",
      isSave: false,
      isSaveComplete: false,
      isDelete: false,
      isDeleteComplete: false,
      isConfirmBack: false,
      maxLength: 0,
      minLength: 0,
      pageArray: [],
      pageCurrent: 0,
      pageLatest: 0,
      isShowPage: false,
      isActive: false,
      fillValue: 0,
      fillArray: [],
      filterCorrect: [],
      fitlerMiss: [],
      allCorrect: 0,
      allMiss: 0
    };
  },
  watch: {
    isShowAnswer(val) {
      if (val == true) {
        this.isDisable = true;
      } else {
        this.isDisable = false;
      }
    },
    quizindex(val) {
      if (val == 0) {
        this.isDisablePrev = true;
      }
      if (val > 0) {
        this.isDisablePrev = false;
        this.isDisableNext = false;
      }
      if (val + 1 == this.quizlist.length) {
        this.isDisableNext = true;
      }
    },
    letterCount(val) {
      if (val == 0) {
        this.isDisableCancel = true;
      } else {
        this.isDisableCancel = false;
      }
    },
    quizanswer(val) {
      if (val.length == 0) {
        this.isDisable = true;
        this.savelist[this.quizindex].isDone = 1;
      }
    },
  },
  async mounted() {
    this.letterLength();
  },
  methods: {
    async showPage() {
      this.fillArray = [];
      this.isShowPage = true;
      let findIndex = this.savelist.findIndex((p) => p.isDone == 0);
      this.fillValue = this.pageCurrent;
      if ((findIndex === -1) & (this.quizindex + 1 === this.savelist.length)) {
        this.pageLatest = this.savelist.length;
      } else if (
        (findIndex === -1) &
        (this.quizindex + 1 !== this.savelist.length)
      ) {
        this.pageLatest = this.savelist.length;
      } else {
        this.pageLatest = findIndex + 1;
      }
    },

    async changePage(value) {
      console.log(value);
      if (this.savelist.length != value) {
        console.log("change");
        this.quizindex = value - 1;
        this.isShowPage = false;
        this.initiateQuiz();
      }
    },

    async inputValue(value) {
      this.fillArray.push(value);
      let initValue = this.fillArray.join("");
      if (
        (String(this.fillValue).indexOf("0") == 0) &
        (this.fillValue.length > 0)
      ) {
        this.fillArray.shift();
      }
      if (Number(initValue) <= this.pageLatest) {
        this.fillValue = this.fillArray.join("");
      }
      if (Number(initValue) > this.pageLatest) {
        this.fillArray.pop();
      }
    },

    async deleteValue() {
      this.fillArray.pop();
      this.fillValue = this.fillArray.join("");
      console.log("value", this.fillValue);
    },

    async goToPage() {
      if (this.fillValue == "" || Number(this.fillValue) == 0) {
        this.fillValue = this.pageLatest;
        setTimeout(() => {
          this.isShowPage = false;
          this.quizindex = this.pageLatest - 1;
          this.initiateQuiz();
        }, 200);
      } else {
        setTimeout(() => {
          this.isShowPage = false;
          this.quizindex = Number(this.fillValue) - 1;
          this.initiateQuiz();
        }, 200);
      }
    },

    async letterLength() {
      this.selectLength = this.type.slice(0, 1);
      this.selectDictionary = this.lexicon;
      this.saveName = this.quizName;
      console.log("save", this.saveName);
      if (this.genType == "new") {
        this.loadQuiz();
      }
      if (this.genType == "custom") {
        this.loadQuiz();
      }
      if (this.genType == "load") {
        this.isPreloadQuiz = true;
        const db = new Dexie(this.saveName);
        db.version(1).stores({
          data: "Id, Word, Leftover, Correct, isDone",
        });
        await db.open();
        console.log("findword");
        const data = await db.data.where("Word").notEqual("").sortBy("Id");
        console.log(data);
        db.close();
        console.log("loaded");
        let len = data.map((p) => {
          return p.Word.length;
        });
        let result = len.filter((p, q) => len.indexOf(p) == q).sort();
        this.minLength = Number(result.slice(0, 1));
        this.maxLength = Number(result.slice(-1)) + 1;
        console.log(this.maxLength);
        this.savelist = data;
        console.log("save", this.savelist);
        if (this.selectDictionary == "csw21") {
          await csw21_db.open();
          try {
            const data = await csw21_db.data
              .where("Number")
              .between(this.minLength, this.maxLength)
              .toArray();
            csw21_db.close();
            if (data.length > 0) {
              this.wordlist = data;
            } else {
              this.dialog = true;
            }
          } catch (error) {
            console.log(error);
          }
        }
        if (this.selectDictionary == "twl06") {
          console.log("yes");
          await twl06_db.open();
          try {
            const data = await twl06_db.data
              .where("Number")
              .between(this.minLength, this.maxLength)
              .toArray();
            twl06_db.close();
            if (data.length > 0) {
              this.wordlist = data;
            } else {
              this.dialog = true;
            }
          } catch (error) {
            console.log(error);
          }
        }
        if (this.selectDictionary == "nwl2022") {
          await nwl2022_db.open();
          try {
            const data = await nwl2022_db.data
              .where("Number")
              .between(this.minLength, this.maxLength)
              .toArray();
            nwl2022_db.close();
            if (data.length > 0) {
              this.wordlist = data;
            } else {
              this.dialog = true;
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          const db = new Dexie(this.selectDictionary);
          db.version(1).stores({
            data: "Word, Number",
          });
          await db.open();
          try {
            console.log(this.selectDictionary);
            console.log(this.minLength);
            console.log(this.maxLength);
            const data = await db.data
              .where("Number")
              .between(this.minLength, this.maxLength)
              .toArray();
            console.log(data);
            db.close();
            if (data.length > 0) {
              this.wordlist = data;
            } else {
              this.dialog = true;
              await Dexie.delete(this.selectDictionary);
            }
          } catch (error) {
            console.log(error);
          }
        }
        this.savelist.forEach((p) => this.quizlist.push(p.Word));
        console.log("push");
        let findIndex = this.savelist.findIndex((p) => p.isDone == 0);
        if (findIndex == -1) {
          this.quizindex = this.savelist.length - 1;
          console.log("findindex", this.quizindex);
        } else {
          this.quizindex = findIndex;
          console.log("findindex", this.quizindex);
        }

        console.log("filter");
        this.initiateQuiz();
        console.log("initiate");
        this.isPreloadQuiz = false;
        this.isLoadQuiz = false;
        console.log("loading finished");
      }
    },

    async loadQuiz() {
      this.isPreloadQuiz = true;
      if (this.selectDictionary == "csw21") {
        await csw21_db.open();

        const data_count = await csw21_db.data.count();
        csw21_db.close();
        console.log(data_count);
        if (data_count == 0) {
          this.dialog = true;
        } else {
          this.generateQuiz();
        }
      } else if (this.selectDictionary == "twl06") {
        await twl06_db.open();
        const data_count = await twl06_db.data.count();
        twl06_db.close();
        console.log("x", data_count);
        if (data_count == 0) {
          this.dialog = true;
        } else {
          this.generateQuiz();
        }
      } else if (this.selectDictionary == "nwl2022") {
        await nwl2022_db.open();
        const data_count = await nwl2022_db.data.count();
        nwl2022_db.close();
        console.log(data_count);
        if (data_count == 0) {
          this.dialog = true;
        } else {
          this.generateQuiz();
        }
      } else {
        const db = new Dexie(this.selectDictionary);
        db.version(1).stores({
          data: "Word, Number",
        });
        await db.open();
        const data_count = await db.data.count();
        db.close();
        console.log(data_count);
        if (data_count == 0) {
          this.dialog = true;
          await Dexie.delete(this.selectDictionary);
        } else {
          this.generateQuiz();
        }
      }
    },

    async createDatabase() {
      this.back();
    },

    async generateQuiz() {
      if (this.genType == "custom") {
        setTimeout(async () => {
          this.isCreateQuiz = false;
          const db = new Dexie(this.type);
          db.version(1).stores({
            data: "Word",
          });
          await db.open();
          const data = await db.data.where("Word").notEqual("").toArray();
          if (data.length == 0) {
            this.dialog = true;
          } else {
            let len = data.map((p) => {
              return p.Word.length;
            });
            let res = len.filter((p, q) => len.indexOf(p) == q).sort();
            this.minLength = Number(res.slice(0, 1));
            this.maxLength = Number(res.slice(-1)) + 1;
            db.close();

            if (this.selectDictionary == "csw21") {
              await csw21_db.open();
              try {
                const data = await csw21_db.data
                  .where("Number")
                  .between(this.minLength, this.maxLength)
                  .toArray();
                csw21_db.close();
                this.wordlist = data;
                console.log(data);
              } catch (error) {
                console.log(error);
              }
            }
            if (this.selectDictionary == "twl06") {
              await twl06_db.open();
              try {
                const data = await twl06_db.data
                  .where("Number")
                  .between(this.minLength, this.maxLength)
                  .toArray();
                twl06_db.close();
                this.wordlist = data;
                console.log(data);
              } catch (error) {
                console.log(error);
              }
            }
            if (this.selectDictionary == "nwl2022") {
              await nwl2022_db.open();
              try {
                const data = await nwl2022_db.data
                  .where("Number")
                  .between(this.minLength, this.maxLength)
                  .toArray();
                nwl2022_db.close();
                this.wordlist = data;
                console.log(data);
              } catch (error) {
                console.log(error);
              }
            } else {
              const db = new Dexie(this.selectDictionary);
              db.version(1).stores({
                data: "Word, Number",
              });
              await db.open();
              try {
                const data = await db.data
                  .where("Number")
                  .between(this.minLength, this.maxLength)
                  .toArray();
                db.close();
                this.wordlist = data;
                console.log(data);
              } catch (error) {
                console.log(error);
              }
            }

            let del_duplicate = [];
            let result = [];

            data.forEach((p) => del_duplicate.push(p.Word));
            console.log("push");
            if (this.sortType == "Random") {
              del_duplicate.sort((a, b) => 0.5 - Math.random());
            }
            if (this.sortType == "Ascending") {
              del_duplicate.sort((a, b) => a.localeCompare(b));
            }
            if (this.sortType == "Descending") {
              del_duplicate.sort((a, b) => b.localeCompare(a));
            }

            console.log("sort");
            result = del_duplicate.map((p) => p.split("").sort().join(""));
            console.log("split");
            this.quizlist = result.filter((p, q) => result.indexOf(p) == q);
            this.savelist = this.quizlist.map((p, q) => {
              return {
                Id: q + 1,
                Word: p,
                Leftover: [],
                Correct: [],
                isDone: 0,
              };
            });

            console.log("filter");
            this.initiateQuiz();
            console.log("initiate");
            this.isLoadQuiz = false;
            this.isPreloadQuiz = false;
            console.log("loading finished");
          }
        }, 100);
      } else {
        setTimeout(async () => {
          this.isCreateQuiz = false;
          if (this.selectDictionary == "csw21") {
            await csw21_db.open();
            try {
              const data = await csw21_db.data
                .where("Number")
                .equals(Number(this.selectLength))
                .toArray();
              csw21_db.close();
              this.wordlist = data;
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          }
          if (this.selectDictionary == "twl06") {
            await twl06_db.open();
            try {
              const data = await twl06_db.data
                .where("Number")
                .equals(Number(this.selectLength))
                .toArray();
              twl06_db.close();
              this.wordlist = data;
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          }
          if (this.selectDictionary == "nwl2022") {
            await nwl2022_db.open();
            try {
              const data = await nwl2022_db.data
                .where("Number")
                .equals(Number(this.selectLength))
                .toArray();
              nwl2022_db.close();
              this.wordlist = data;
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          }
          if (
            (this.selectDictionary != "csw21") &
            (this.selectDictionary != "twl06") &
            (this.selectDictionary != "nwl2022")
          ) {
            const db = new Dexie(this.selectDictionary);
            db.version(1).stores({
              data: "Word, Number",
            });
            await db.open();
            try {
              const data = await db.data
                .where("Number")
                .equals(Number(this.selectLength))
                .toArray();
              db.close();
              this.wordlist = data;
              console.log("len", this.selectLength);
              console.log("yes", data);
              if (data.length == 0) {
                this.dialog = true;
              }
            } catch (error) {
              console.log(error);
            }
          }

          let del_duplicate = [];
          let result = [];

          this.wordlist.forEach((p) => del_duplicate.push(p.Word));
          console.log("push");
          if (this.sortType == "Random") {
            del_duplicate.sort((a, b) => 0.5 - Math.random());
          }
          if (this.sortType == "Ascending") {
            del_duplicate.sort((a, b) => a.localeCompare(b));
          }
          if (this.sortType == "Descending") {
            del_duplicate.sort((a, b) => b.localeCompare(a));
          }

          console.log("sort");
          result = del_duplicate.map((p) => p.split("").sort().join(""));
          console.log("split");
          this.quizlist = result.filter((p, q) => result.indexOf(p) == q);

          this.savelist = this.quizlist.map((p, q) => {
            return {
              Id: q + 1,
              Word: p,
              Leftover: [],
              Correct: [],
              isDone: 0,
            };
          });

          console.log("filter");
          this.initiateQuiz();
          console.log("initiate");
          this.isLoadQuiz = false;
          this.isPreloadQuiz = false;
          console.log("loading finished");
        }, 100);
      }
    },

    initiateQuiz() {
      this.clear();

      this.filterCorrect = this.savelist.filter(p => p.Correct.length > 0)
      this.allCorrect = this.savelist.filter(p => p.Correct.length > 0).map(p => {return p.Correct.length}).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      this.filterMiss = this.savelist.filter(p => p.Leftover.length > 0)
      this.allMiss = this.savelist.filter(p => p.Leftover.length > 0).map(p => {return p.Leftover.length}).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      
      if (this.quizindex + 1 == this.quizlist.length) {
        this.isDisableNext = true;
      }
      this.pageCurrent = this.quizindex + 1;
      let filter = this.savelist.filter((p) => p.isDone == 1);
      let count = filter.map((p, q) => q + 1);
      count.length == this.savelist.length
        ? count
        : count.push(count.length + 1);
      console.log("pagecurrent", this.pageCurrent);
      this.pageArray = count;
      console.log("pageArray", this.pageArray);
      this.isShowAnswer = false;
      this.isDisable = false;
      this.quizanswer = [];
      this.quizconfirm = [];
      this.quizcorrectlist = [];
      this.quizletter = "";
      let characters = this.quizlist[this.quizindex].split("");
      let randomString = "";
      while (characters.length > 0) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomCharacter = characters.splice(randomIndex, 1)[0];
        randomString += randomCharacter;
      }
      this.quizanswer = this.wordlist
        .filter(
          (p) =>
            p.Word.toUpperCase().split("").sort().join("") ==
            this.quizlist[this.quizindex]
              .toUpperCase()
              .split("")
              .sort()
              .join("")
        )
        .map((p) => p.Word);
      console.log("anwswer", this.quizanswer);
      this.quizletter = randomString.split("");
      console.log(this.quizletter);

      this.selectLength = this.quizletter.length;
      if (
        this.savelist[this.quizindex].Leftover.length > 0 ||
        this.savelist[this.quizindex].Correct.length > 0
      ) {
        this.isDisable = true;
        this.isShowAnswer = true;
      }

    },

    confirmsave() {
      this.isConfirmSave = true;
    },

    confirmdelete() {
      this.isConfirmDelete = true;
    },
    confirmback() {
      this.isConfirmBack = true;
    },

    showDetail() {
      this.isShowDetail = true;
    },

    async commitSave() {
      this.isSave = true;
      const db = new Dexie(this.saveName);
      db.version(1).stores({
        data: "Id, Word, Leftover, Correct, isDone",
      });
      const count = await db.data.count();
      if (count == 0) {
        await db.data.bulkAdd(this.savelist);
        console.log("add");
        this.isSaveComplete = true;
        localStorage.setItem(
          this.saveName,
          this.selectDictionary + "_" + this.type
        );
        setTimeout(async () => {
          this.isConfirmSave = false;
        }, 1000);
        setTimeout(async () => {
          this.isSaveComplete = false;
          this.isSave = false;
        }, 2000);
      }
      if (count > 0) {
        // await db.data.clear()
        // console.log("clear")
        await db.data.bulkPut(this.savelist);
        console.log("put");
        this.isSaveComplete = true;
        localStorage.setItem(
          this.saveName,
          this.selectDictionary + "_" + this.type
        );
        setTimeout(async () => {
          this.isConfirmSave = false;
        }, 1000);
        setTimeout(async () => {
          this.isSaveComplete = false;
          this.isSave = false;
        }, 2000);
      }
    },

    async commitDelete() {
      this.isDelete = true;
      await Dexie.delete(this.saveName);
      localStorage.removeItem(this.saveName);
      setTimeout(async () => {
        this.isDeleteComplete = true;
      }, 1500);

      console.log("Database successfully deleted");
      setTimeout(async () => {
        this.isConfirmDelete = false;
        this.isDeleteComplete = false;
        this.isDelete = false;
        this.back();
      }, 2500);
    },

    shuffle() {
      if (this.quizletterreserve.length == 0) {
        let characters = this.quizlist[this.quizindex].split("");
        let randomString = "";
        while (characters.length > 0) {
          let randomIndex = Math.floor(Math.random() * characters.length);
          let randomCharacter = characters.splice(randomIndex, 1)[0];
          randomString += randomCharacter;
        }
        this.quizletter = randomString.split("");
        console.log(this.quizletter);
      } else {
        let characters = this.quizletter;
        let randomString = "";
        while (characters.length > 0) {
          let randomIndex = Math.floor(Math.random() * characters.length);
          let randomCharacter = characters.splice(randomIndex, 1)[0];
          randomString += randomCharacter;
        }
        this.quizletter = randomString.split("");
        console.log(this.quizletter);
      }
    },
    check() {
      if (!this.isShowAnswer) {
        let check = [];
        this.quizconfirm = (
          this.letterBlock[0].letter +
          this.letterBlock[1].letter +
          this.letterBlock[2].letter +
          this.letterBlock[3].letter +
          this.letterBlock[4].letter +
          this.letterBlock[5].letter +
          this.letterBlock[6].letter +
          this.letterBlock[7].letter
        ).toUpperCase();
        check = this.quizanswer.filter((p) => p == this.quizconfirm);
        if (check.length > 0) {
          this.snackbarCorrect = true;
          check.forEach((p) => this.quizcorrectlist.push(p));
          this.quizanswer = this.quizanswer.filter(
            (p) => p != this.quizconfirm
          );
          this.clear();
          if (this.quizanswer.length == 0) {
            this.savelist[this.quizindex].Correct = this.quizcorrectlist;
            this.savelist[this.quizindex].isDone = 1;
            this.isDisable = true;
            this.isShowAnswer = true;
          }
        }
        if (check.length == 0) {
          this.snackbar = true;
        }
      }
    },
    showHint() {
      if (!this.isDisable) {
        this.isShowAnswer = true;
        this.savelist[this.quizindex].Leftover = this.quizanswer;
        this.savelist[this.quizindex].Correct = this.quizcorrectlist;
        this.savelist[this.quizindex].isDone = 1;
      } else {
      }
    },
    onDrop1(e) {
      this.dragover1 = false;
      // e.preventDefault()
      // const files = e.dataTransfer.files;
      // const file = files[0];

      // console.log('Dropped image URL:', file);
    },
    onDrop2(e) {
      this.dragover2 = false;
    },
    onDrop3(e) {
      this.dragover3 = false;
    },
    onDrop4(e) {
      this.dragover4 = false;
    },
    onDrop5(e) {
      this.dragover5 = false;
    },
    onDrop6(e) {
      this.dragover6 = false;
    },
    onDrop7(e) {
      this.dragover7 = false;
    },
    onDrop8(e) {
      this.dragover8 = false;
    },
    stringPush(letter, index) {
      if (this.letterCount < this.selectLength) {
        this.letterCount = this.letterCount + 1;
        this.letterBlock[this.letterCount - 1].letter = letter;
        let str = this.quizletter
          .slice(index, index + 1)
          .forEach((p) => this.quizletterreserve.push(p));

        this.quizletter.splice(index - this.quizletter.length, 1);
      } else {
        this.letterCount = this.selectLength;
      }
    },
    letterOut() {
      if (this.letterCount > 0) {
        let str = this.quizletterreserve
          .slice(this.letterCount - 1, this.letterCount - 1 + 1)
          .forEach((p) => this.quizletter.push(p));
        this.quizletterreserve.splice(
          this.letterCount - 1 - this.quizletterreserve.length,
          1
        );
        this.letterBlock[this.letterCount - 1].letter = "";
        this.letterCount = this.letterCount - 1;
      } else {
        this.letterCount = 0;
      }
    },
    prev() {
      this.quizindex = this.quizindex - 1;
      this.initiateQuiz();
    },
    next() {
      if (!this.isShowAnswer & (this.quizanswer.length > 0)) {
        this.showHint();
      } else if (!this.isShowAnswer & (this.quizanswer.length == 0)) {
        this.savelist[this.quizindex].isDone = 1;
        this.quizindex = this.quizindex + 1;
        this.initiateQuiz();
      } else {
        this.quizindex = this.quizindex + 1;
        this.initiateQuiz();
      }
    },

    latestPrev() {
      if (this.quizindex !== 0) {
        this.isDisableNext = false;
        this.quizindex = 0;
        this.initiateQuiz();
      }
    },

    latestNext() {
      let findIndex = this.savelist.findIndex((p) => p.isDone == 0);
      console.log("index", findIndex);
      if ((findIndex !== -1) & (this.quizindex !== findIndex)) {
        this.quizindex = findIndex;
        this.initiateQuiz();
      }
      if ((findIndex === -1) & (this.quizindex + 1 !== this.savelist.length)) {
        this.quizindex = this.savelist.length - 1;
        this.initiateQuiz();
      }
    },
    async back() {
      this.dialog = false;
      this.isConfirmBack = false;
      this.quizlist = [];
      this.sublist = [];
      this.filterCorrect = []
      this.filterMiss = []
      this.allCorrect = 0
      this.allMiss = 0
      this.quizindex = 0;
      this.isLoadQuiz = true;
      this.tabindex = 0
      this.$emit("returnHomepage", true);
    },
    clear() {
      this.letterBlock = [
        { block: "1", letter: "" },
        { block: "2", letter: "" },
        { block: "3", letter: "" },
        { block: "4", letter: "" },
        { block: "5", letter: "" },
        { block: "6", letter: "" },
        { block: "7", letter: "" },
        { block: "8", letter: "" },
        { block: "9", letter: "" },
      ];
      this.letterCount = 0;
      this.quizletterreserve.forEach((p) => this.quizletter.push(p));
      this.quizletterreserve = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.v-application p {
  margin-bottom: 0 !important;
  align-self: center !important;
}

.v-btn {
  // background-color: rgb(46, 216, 55) !important;
}

.v-chip {
  padding: 2px;
  width: 37px;

  p {
    font-size: 10px !important;
  }
}

// .v-btn:hover {
//   background-color: red !important;
// }
.logo {
  display: flex;
  justify-content: center;

  img {
    width: 30px;
    height: auto;
  }
}

.toolbar-top {
  background-color: rgb(129, 127, 255);
  padding-top: 12px;
  padding-bottom: 12px;
  color: white;
}

.toolbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  background-color: rgb(129, 127, 255);
  z-index: 0;
  // border-radius: 10px;
  padding-right: 12px;
  padding-bottom: 12px;
}

.v-text-field {
  background-color: azure;

  // max-width: 50%;
  input {
    font-size: 0.8rem !important;
  }
}

:deep(.highlightText) {
  color: green;
}

p {
  font-size: 0.8rem;
}

.text-banner {
  width: 100%;
  max-width: 500px;
  background-color: rgb(129, 127, 255);
  border-radius: 5px;
  min-height: 10px;

  .text-banner-inner {
    display: flex;
    justify-content: center;
    min-height: 10px;
    width: 100%;
    background-color: white;

    .v-card {
      // margin-left: 4px;
      // margin-right: 4px;
      z-index: 1;
      display: flex;
      justify-content: center;
      max-width: 50px;
      max-height: 50px;
      width: 11vw;
      height: 11vw;
      background-color: white;

      img {
        width: 100%;
      }
    }
  }
}

.letter-box {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .letter-piece {
    max-width: 50px;
    max-height: 50px;
    width: 11vw;
    height: 11vw;
    // width: 100%;
    // height: auto;
  }
}

.answer-box {
  width: 100%;
  max-width: 500px;
  margin-top: 10px;
  border: 1px solid;
  height: 100px;
  overflow: auto;

  .answer-box-inner {
    padding: 4px;
    max-height: 100px;
    overflow: auto;
    width: 100%;
    background-color: white;
  }
}

.v-btn p {
  color: white !important;
}

.navation-drawer {
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #817fff;
  color: white;
  bottom: 0;
  height: auto;
  min-height: 24px;

  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 20px !important;
    padding: 5px !important;
    margin-left: 1px !important;
    margin-right: 1px !important;
  }
}

.assist-menu {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;

  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 55px !important;
    min-height: 55px !important;
    padding: 5px !important;
    margin-left: 1px !important;
    margin-right: 1px !important;
  }
}
.green {
  background-color: green !important;
}
.red {
  background-color: red !important;
}
</style>
