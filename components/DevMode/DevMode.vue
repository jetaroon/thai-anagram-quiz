<template>
    <div class="d-flex flex-column align-center mt-5">
        <div class="text-banner">
            <div class="text-banner-inner-hilow mt-2 mb-0">
                <v-card @click="vowelUpper2(1)">
                    <div v-if="letterBlock[0].upper2.length > 0 & letterBlock[0].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[0].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(2)">
                    <div v-if="letterBlock[1].upper2.length > 0 & letterBlock[1].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[1].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(3)">
                    <div v-if="letterBlock[2].upper2.length > 0 & letterBlock[2].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[2].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(4)">
                    <div v-if="letterBlock[3].upper2.length > 0 & letterBlock[3].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[3].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(5)">
                    <div v-if="letterBlock[4].upper2.length > 0 & letterBlock[4].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[4].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(6)">
                    <div v-if="letterBlock[5].upper2.length > 0 & letterBlock[5].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[5].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(7)">
                    <div v-if="letterBlock[6].upper2.length > 0 & letterBlock[6].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[6].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(8)">
                    <div v-if="letterBlock[7].upper2.length > 0 & letterBlock[7].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[7].upper2}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper2(9)">
                    <div v-if="letterBlock[8].upper2.length > 0 & letterBlock[8].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[8].upper2}.png`)" />
                    </div>
                </v-card>
            </div>
            <div class="text-banner-inner-hilow pt-0 pb-1">
                <v-card @click="vowelUpper1(1)">
                    <div v-if="letterBlock[0].upper1.length > 0 & letterBlock[0].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[0].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(2)">
                    <div v-if="letterBlock[1].upper1.length > 0 & letterBlock[1].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[1].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(3)">
                    <div v-if="letterBlock[2].upper1.length > 0 & letterBlock[2].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[2].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(4)">
                    <div v-if="letterBlock[3].upper1.length > 0 & letterBlock[3].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[3].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(5)">
                    <div v-if="letterBlock[4].upper1.length > 0 & letterBlock[4].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[4].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(6)">
                    <div v-if="letterBlock[5].upper1.length > 0 & letterBlock[5].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[5].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(7)">
                    <div v-if="letterBlock[6].upper1.length > 0 & letterBlock[6].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[6].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(8)">
                    <div v-if="letterBlock[7].upper1.length > 0 & letterBlock[7].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[7].upper1}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelUpper1(9)">
                    <div v-if="letterBlock[8].upper1.length > 0 & letterBlock[8].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[8].upper1}.png`)" />
                    </div>
                </v-card>
            </div>
            <div class="text-banner-inner">
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover1 }">
                    <div v-if="letterBlock[0].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[0].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover2 }">
                    <div v-if="letterBlock[1].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[1].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover3 }">
                    <div v-if="letterBlock[2].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[2].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover4 }">
                    <div v-if="letterBlock[3].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[3].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover5 }">
                    <div v-if="letterBlock[4].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[4].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover6 }">
                    <div v-if="letterBlock[5].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[5].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover7 }">
                    <div v-if="letterBlock[6].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[6].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover8 }">
                    <div v-if="letterBlock[7].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[7].letter}.png`)" />
                    </div>
                </v-card>
                <v-card @drop.prevent="onDrop(letterHold)" @dragover.prevent="onHold()" @dragenter.prevent="onHold()"
                    @dragleave.prevent="onLeave()" :class="{ 'orange lighten-2': dragover9 }">
                    <div v-if="letterBlock[8].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[8].letter}.png`)" />
                    </div>
                </v-card>
            </div>
            <div class="text-banner-inner-hilow mt-1 mb-2">
                <v-card @click="vowelLower(1)">
                    <div v-if="letterBlock[0].lower.length > 0 & letterBlock[0].letter.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[0].lower}.png`)" />
                    </div>
                </v-card>
                <v-card @click="vowelLower(2)">
                    <div v-if="letterBlock[1].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[1].lower}.png`)" />
                    </div>

                </v-card>
                <v-card @click="vowelLower(3)">
                    <div v-if="letterBlock[2].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[2].lower}.png`)" />
                    </div>

                </v-card>
                <v-card @click="vowelLower(4)">
                    <div v-if="letterBlock[3].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[3].lower}.png`)" />
                    </div>

                </v-card>
                <v-card @click="vowelLower(5)">
                    <div v-if="letterBlock[4].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[4].lower}.png`)" />
                    </div>

                </v-card>
                <v-card @click="vowelLower(6)">
                    <div v-if="letterBlock[5].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[5].lower}.png`)" />
                    </div>

                </v-card>
                <v-card @click="vowelLower(7)">
                    <div v-if="letterBlock[6].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[6].lower}.png`)" />
                    </div>

                </v-card>
                <v-card @click="vowelLower(8)">
                    <div v-if="letterBlock[7].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[7].lower}.png`)" />
                    </div>

                </v-card>
                <v-card @click="vowelLower(9)">
                    <div v-if="letterBlock[8].lower.length > 0">
                        <img :src="require(`@/static/thai alphabet/${letterBlock[8].lower}.png`)" />
                    </div>

                </v-card>

            </div>
        </div>
        <div style="width:100%; padding-left: 4px; padding-right: 4px; max-width: 500px; margin-top: 4px;"
            class="d-flex justify-space-between align-center">
            <div> <v-btn @click="back()"><v-icon>{{ mdiHomeOutline }}</v-icon></v-btn></div>
            <div>
                <div>คำตอบที่เหลือทั้งหมด: {{ quizanswer.length }}</div>
                <div class="ml-3">ตอบถูก: {{ quizcorrectlist.length }}</div>
            </div>
            <div><v-btn color="yellow" @click="showHint()"><v-icon>{{ mdiLightbulbOn10 }}</v-icon></v-btn></div>
        </div>
        <div class="answer-box">
            <div class="answer-box-inner">
                <!-- not answer yet -->
                <span v-if="(quizcorrectlist.length > 0)" class="ml-1 mr-1" style="color: green"
                    v-for="(item, index) in quizcorrectlist" :key="item">
                    {{ item }}</span>
                <span v-if="isShowAnswer" class="ml-1 mr-1" v-for="(item, index) in quizanswer" :key="item">
                    {{ item }}</span>
            </div>
        </div>
        <div style="height: 11vw; max-height: 50px; margin-top: 10px;" v-if="quizletter.length == 0 & !isNotFound"></div>

        <div class="letter-box" v-if="quizletter.length > 0">
            <img v-for="(item, index) in quizletter" :key="index" class="letter-piece"
                :src="require(`@/static/thai alphabet/${item.toLowerCase()}.png`)"
                @mousedown="stringHold(item.toLowerCase(), index)" @click="stringPush(item.toLowerCase(), index)" />

        </div>
        <div style="height: 11vw; max-height: 50px; margin-top: 10px;" v-if="isNotFound">
            ไม่พบข้อมูล
        </div>

        <div class="assist-menu">
            <div class="d-flex">
                <div class="d-flex align-center">ต่ำสุด<v-select
                        style="width:100%; max-width:70px; margin-left: 4px; margin-right: 4px;" hide-details outlined
                        :items="quizLength" v-model="minLength"></v-select></div>
                <div class="d-flex align-center">สูงสุด<v-select
                        style="width:100%; max-width:70px; margin-left: 4px; margin-right: 4px;" hide-details outlined
                        :items="quizLength" v-model="maxLength"></v-select></div>

                <v-btn color="" @click="randomQuiz()">
                    สุ่ม
                </v-btn>
            </div>
            <div class="mt-1">
                <v-btn color="success" @click="check()" :disabled="isDisable">
                    <v-icon>{{ mdiCheck }}</v-icon>
                </v-btn>
                <v-btn color="warning" @click="letterOut()" :disabled="isDisableCancel">
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
        <!-- <div class="d-flex justify-center mt-10">
            <v-file-input :clearable="false" show-size label="File input" hide-details outlined accept=".json"
                @change="importFile($event)"></v-file-input>
            <v-btn @click="downloadFile()">Download</v-btn>
        </div> -->
        <v-dialog transition="dialog-top-transition" max-width="500" v-model="vowelSelection" persistent>
            <v-card class="d-flex flex-column align-center">
                <v-toolbar color="#817FFF" dark width="100%">กรุณาเลือกสระหรือวรรณยุกต์</v-toolbar>
                <div v-if="vowelPosition == 'lower'" class="d-flex flex-wrap justify-center">
                    <img v-if="item != 'blank'"
                        style="width: 55px; margin-left: 8px; margin-right: 8px; margin-top: 16px; cursor: pointer;"
                        v-for="(item, index) in lowerLayer" :key="index"
                        :src="require(`@/static/thai alphabet/${item}.png`)" @click="selectVowel(index)" />
                </div>
                <div v-if="vowelPosition == 'upper1'" class="d-flex flex-wrap justify-center">
                    <img v-if="item != 'blank'"
                        style="width: 55px; margin-left: 8px; margin-right: 8px; margin-top: 16px; cursor: pointer;"
                        v-for="(item, index) in upper1Layer" :key="index"
                        :src="require(`@/static/thai alphabet/${item}.png`)" @click="selectVowel(index)" />
                </div>
                <div v-if="vowelPosition == 'upper2'" class="d-flex flex-wrap justify-center">
                    <img v-if="item != 'blank'"
                        style="width: 55px; margin-left: 8px; margin-right: 8px; margin-top: 16px; cursor: pointer;"
                        v-for="(item, index) in upper2Layer" :key="index"
                        :src="require(`@/static/thai alphabet/${item}.png`)" @click="selectVowel(index)" />
                </div>

                <v-card-actions class="justify-end">
                    <v-btn text @click="removeVowel()">นำออก</v-btn>
                    <v-btn text @click="vowelSelection = false">ปิด</v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>

        <v-dialog v-model="dialog" persistent max-width="340">
            <v-card>
                <v-card-title class="text-h6 text-center pb-0">
                    ไม่พบฐานข้อมูล
                </v-card-title>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="deep-purple darken-1" text @click="dialog = false">
                        ตกลง
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>



        <v-snackbar v-model="snackbar" :timeout="timeout" centered tile color="red accent-2">
            <p class="d-flex justify-center">{{ textIncorrect }}</p>
        </v-snackbar>
        <v-snackbar v-model="snackbarCorrect" :timeout="timeout" centered tile color="success accent-2">
            <p class="d-flex justify-center">{{ textCorrect }}</p>
        </v-snackbar>

        <div style="height: 50px"></div>
        <v-overlay v-if="loading">
            <v-progress-circular :size="70" :width="7" color="orange" indeterminate></v-progress-circular>
        </v-overlay>
    </div>
</template>
    
<script>
import { mdiChevronDoubleLeft, mdiTempleBuddhist } from "@mdi/js";
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
import { mdiDatabaseOutline } from '@mdi/js'
import { royal_thai54_db } from '@/static/royal_thai54_db.js'
export default {
    name: "DevMode",
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
            mdiDatabaseOutline,
            dialog: false,
            exportFile: null,
            textPreview: "",
            dragover1: false,
            dragover2: false,
            dragover3: false,
            dragover4: false,
            dragover5: false,
            dragover6: false,
            dragover7: false,
            dragover8: false,
            dragover9: false,
            loading: true,
            isNotFound: false,
            letterHold: "",
            letterIndex: 0,
            selectLength: 9,
            isDisableCancel: true,
            minLength: 1,
            maxLength: 9,
            quizLength: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            wordlist: [],
            quizletterreserve: [],
            quizanswer: [],
            quizletter: [],
            quizconfirm: [],
            quizcorrectlist: [],
            isShowAnswer: false,
            isDisable: true,
            snackbar: false,
            snackbarCorrect: false,
            textIncorrect: "คำตอบไม่ถูกต้อง!",
            textCorrect: "ถูกต้องนะครับ!",
            timeout: 1000,
            vowelPosition: "",
            vowelSelection: false,
            vowelBlock: 0,
            duplicateAlphabet: [],
            filter_array: [],
            success_array: [],
            quizletterAll:
                ["ก",
                    "ข",
                    "ค",
                    "ฆ",
                    "ง",
                    "จ",
                    "ฉ",
                    "ช",
                    "ซ",
                    "ฌ",
                    "ญ",
                    "ฎ",
                    "ฏ",
                    "ฐ",
                    "ฑ",
                    "ฒ",
                    "ณ",
                    "ด",
                    "ต",
                    "ถ",
                    "ท",
                    "ธ",
                    "น",
                    "บ",
                    "ป",
                    "ผ",
                    "ฝ",
                    "พ",
                    "ฟ",
                    "ภ",
                    "ม",
                    "ย",
                    "ร",
                    "ล",
                    "ว",
                    "ศ",
                    "ษ",
                    "ส",
                    "ห",
                    "ฬ",
                    "อ",
                    "ฮ",
                    "ฤ",
                    "ฦ",
                    "ๅ",
                    "ะ",
                    "า",
                    "ำ",
                    "ไ",
                    "ใ",
                    "โ",
                    "เ",
                    "แ"
                ],
            lowerLayer: [
                "blank",
                "ุ",
                "ู"
            ],
            upper1Layer: [
                "blank",
                "ิ",
                "ี",
                "ึ",
                "ื",
                "่",
                "้",
                "๊",
                "๋",
                "ั",
                "็",
                "์"
            ],
            upper2Layer: [
                "blank",
                "่",
                "้",
                "๊",
                "๋",
                "์"
            ],
            letterCount: 0,
            letterBlock: [
                {
                    block: "1",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "2",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "3",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "4",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "5",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "6",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "7",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "8",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "9",
                    letter: "",
                    upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
            ],
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
        letterCount(val) {
            if (val == 0) {
                this.isDisableCancel = true;
            } else {
                this.isDisableCancel = false;
            }
        },
    },

    async mounted() {
        this.loading = true
        const db = await royal_thai54_db.open();
        const data_count = await db.data.count();
        db.close();
        console.log(data_count);
        if (data_count == 0) {
            this.dialog = true
            setTimeout(() => {
                this.clear()
                this.back()
            }, 1000);

        } else {
            await this.randomQuiz()
        }




    },
    methods: {
        async randomQuiz() {
            this.clear()
            this.isNotFound = false
            this.loading = true
            this.isShowAnswer = false;
            this.isDisable = false;
            this.quizletter = []
            this.quizcorrectlist = []
            await royal_thai54_db.open();
            try {
                const data = await royal_thai54_db.data
                    .where("Number")
                    .between(this.minLength, this.maxLength + 1)
                    .toArray();
                royal_thai54_db.close();
                if (data.length > 0) {
                    this.wordlist = data.sort((a, b) => 0.5 - Math.random())
                    this.quizanswer = this.wordlist
                        .filter(
                            (p) =>
                                p.WordFilter.split("").sort().join("") ==
                                this.wordlist[1].WordFilter
                                    .split("")
                                    .sort()
                                    .join("")
                        ).map(p => p.Word)
                    console.log('answer', this.quizanswer)
                    let characters = this.wordlist[1].WordFilter.split("")
                    let randomString = "";
                    while (characters.length > 0) {
                        let randomIndex = Math.floor(Math.random() * characters.length);
                        let randomCharacter = characters.splice(randomIndex, 1)[0];
                        randomString += randomCharacter;
                    }
                    this.quizletter = randomString.split("")
                    this.loading = false
                } else {
                    this.isNotFound = true
                    this.loading = false
                }
            } catch (error) {
                console.log(error);
            }
        },

        check() {
            if (!this.isShowAnswer) {
                let check = [];
                let regex = /ำ([่้๊๋ั็์])/g
                this.quizconfirm =
                    (this.letterBlock[0].letter + this.letterBlock[0].lower + this.letterBlock[0].upper1 + this.letterBlock[0].upper2 +
                        this.letterBlock[1].letter + this.letterBlock[1].lower + this.letterBlock[1].upper1 + this.letterBlock[1].upper2 +
                        this.letterBlock[2].letter + this.letterBlock[2].lower + this.letterBlock[2].upper1 + this.letterBlock[2].upper2 +
                        this.letterBlock[3].letter + this.letterBlock[3].lower + this.letterBlock[3].upper1 + this.letterBlock[3].upper2 +
                        this.letterBlock[4].letter + this.letterBlock[4].lower + this.letterBlock[4].upper1 + this.letterBlock[4].upper2 +
                        this.letterBlock[5].letter + this.letterBlock[5].lower + this.letterBlock[5].upper1 + this.letterBlock[5].upper2 +
                        this.letterBlock[6].letter + this.letterBlock[6].lower + this.letterBlock[6].upper1 + this.letterBlock[6].upper2 +
                        this.letterBlock[7].letter + this.letterBlock[7].lower + this.letterBlock[7].upper1 + this.letterBlock[7].upper2 +
                        this.letterBlock[8].letter + this.letterBlock[8].lower + this.letterBlock[8].upper1 + this.letterBlock[8].upper2)
                        .replace(regex, (match, p1) => p1 + "ำ")

                check = this.quizanswer.filter((p) => p == this.quizconfirm);
                if (check.length > 0) {
                    this.snackbarCorrect = true;
                    check.forEach((p) => this.quizcorrectlist.push(p));
                    this.quizanswer = this.quizanswer.filter(
                        (p) => p != this.quizconfirm
                    );
                    this.clear();
                    if (this.quizanswer.length == 0) {
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
            } else {
            }
        },

        filterString(inputString) {
            return inputString.replaceAll('ิ', '')
                .replaceAll('ี', '')
                .replaceAll('ึ', '')
                .replaceAll('ื', '')
                .replaceAll('่', '')
                .replaceAll('้', '')
                .replaceAll('๊', '')
                .replaceAll('๋', '')
                .replaceAll('ั', '')
                .replaceAll('็', '')
                .replaceAll('์', '')
                .replaceAll('ุ', '')
                .replaceAll('ู', '')
        },
        async importFile(event) {
            if (event != null) {
                let array = []
                let array2 = []
                const file = await event.text()
                let jsonParse = await JSON.parse(file)
                let convert = jsonParse.filter(p => !p.Word.includes("."))
                console.log('json', jsonParse)
                console.log('convert', convert)
                this.exportFile = convert.map((p, i) => {
                    return {
                        Id: i + 1,
                        Word: p.Word,
                        WordReverse: p.Word.split('').reverse().join(''),
                        WordFilter: p.WordFilter
                    }
                })
                console.log('this.exportFile', this.exportFile)


                const jsonString = JSON.stringify(this.exportFile, null, 2);
                this.textPreview = jsonString
            }
        },

        async downloadFile() {
            let name = "anonymous"
            const blob = new Blob([this.textPreview], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = name + ".txt";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            URL.revokeObjectURL(url);
        },

        shuffle() {
            let characters = this.quizletter;
            let randomString = "";
            while (characters.length > 0) {
                let randomIndex = Math.floor(Math.random() * characters.length);
                let randomCharacter = characters.splice(randomIndex, 1)[0];
                randomString += randomCharacter;
            }
            this.quizletter = randomString.split("");
            console.log(this.quizletter);
        },



        async back() {
            this.minLength = 1
            this.maxLength = 9
            this.$emit("returnHomepage", true);
        },
        onHold() {
            if (this.letterCount == 0) this.dragover1 = true
            if (this.letterCount == 1) this.dragover2 = true
            if (this.letterCount == 2) this.dragover3 = true
            if (this.letterCount == 3) this.dragover4 = true
            if (this.letterCount == 4) this.dragover5 = true
            if (this.letterCount == 5) this.dragover6 = true
            if (this.letterCount == 6) this.dragover7 = true
            if (this.letterCount == 7) this.dragover8 = true
            if (this.letterCount == 8) this.dragover9 = true
        },
        onLeave() {
            this.dragover1 = false
            this.dragover2 = false
            this.dragover3 = false
            this.dragover4 = false
            this.dragover5 = false
            this.dragover6 = false
            this.dragover7 = false
            this.dragover8 = false
            this.dragover9 = false
        },
        onDrop(letter) {
            let index = this.letterIndex
            if (letter != "") {
                if (this.letterCount < this.selectLength) {
                    this.letterCount = this.letterCount + 1;
                    this.letterBlock[this.letterCount - 1].letter = letter;
                    let str = this.quizletter
                        .slice(index, index + 1)
                        .forEach((p) => this.quizletterreserve.push(p));
                    this.quizletter.splice(index - this.quizletter.length, 1);
                } else {
                    this.letterCount = this.selectLength
                }
            }
            this.onLeave()
        },


        stringHold(letter, index) {
            this.letterHold = letter
            this.letterIndex = index

        },

        selectVowel(index) {
            if (this.vowelPosition == 'lower') this.letterBlock[this.vowelBlock - 1].lower = this.lowerLayer[index]
            if (this.vowelPosition == 'upper1') this.letterBlock[this.vowelBlock - 1].upper1 = this.upper1Layer[index]
            if (this.vowelPosition == 'upper2') this.letterBlock[this.vowelBlock - 1].upper2 = this.upper2Layer[index]
            this.vowelSelection = false

        },

        removeVowel() {
            if (this.vowelPosition == 'lower') {
                this.letterBlock[this.vowelBlock - 1].lower = ""
                this.letterBlock[this.vowelBlock - 1].lowerIndex = 0
            }
            if (this.vowelPosition == 'upper1') {
                this.letterBlock[this.vowelBlock - 1].upper1 = ""
                this.letterBlock[this.vowelBlock - 1].upper1Index = 0
                this.letterBlock[this.vowelBlock - 1].upper2 = ""
                this.letterBlock[this.vowelBlock - 1].upper2Index = 0

            }
            if (this.vowelPosition == 'upper2') {
                this.letterBlock[this.vowelBlock - 1].upper2 = ""
                this.letterBlock[this.vowelBlock - 1].upper2Index = 0
            }
            this.vowelSelection = false

        },

        vowelUpper1(block) {
            if (this.letterBlock[block - 1].letter.length > 0) {
                // this.letterBlock[block - 1].upper1Index = this.letterBlock[block - 1].upper1Index + 1
                // if (this.letterBlock[block - 1].upper1Index <= 11) {
                //     this.letterBlock[block - 1].upper1 = this.upper1Layer[this.letterBlock[block - 1].upper1Index];
                // }
                // else {
                //     this.letterBlock[block - 1].upper1Index = 0
                //     this.letterBlock[block - 1].upper1 = ""
                //     this.letterBlock[block - 1].upper2Index = 0
                //     this.letterBlock[block - 1].upper2 = ""
                // }
                this.vowelPosition = "upper1"
                this.vowelBlock = block
                this.vowelSelection = true
            }
        },

        vowelUpper2(block) {
            if (this.letterBlock[block - 1].letter.length > 0 & this.letterBlock[block - 1].upper1 != "") {
                // this.letterBlock[block - 1].upper2Index = this.letterBlock[block - 1].upper2Index + 1
                // if (this.letterBlock[block - 1].upper2Index <= 5) {
                //     this.letterBlock[block - 1].upper2 = this.upper2Layer[this.letterBlock[block - 1].upper2Index];
                // }
                // else {
                //     this.letterBlock[block - 1].upper2Index = 0
                //     this.letterBlock[block - 1].upper2 = ""
                // }
                this.vowelPosition = "upper2"
                this.vowelBlock = block
                this.vowelSelection = true
            }
        },

        vowelLower(block) {
            if (this.letterBlock[block - 1].letter.length > 0) {
                //    this.letterBlock[block - 1].lowerIndex = this.letterBlock[block - 1].lowerIndex + 1
                //  if (this.letterBlock[block - 1].lowerIndex <= 2) {
                //    this.letterBlock[block - 1].lower = this.lowerLayer[this.letterBlock[block - 1].lowerIndex];
                //   }
                // else {
                //     this.letterBlock[block - 1].lowerIndex = 0
                //     this.letterBlock[block - 1].lower = ""
                // }

                this.vowelPosition = "lower"
                this.vowelBlock = block
                this.vowelSelection = true
            }
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
                this.letterBlock[this.letterCount - 1].lower = ""
                this.letterBlock[this.letterCount - 1].lowerIndex = 0
                this.letterBlock[this.letterCount - 1].upper1 = ""
                this.letterBlock[this.letterCount - 1].upper1Index = 0
                this.letterBlock[this.letterCount - 1].upper2 = ""
                this.letterBlock[this.letterCount - 1].upper2Index = 0

                this.letterCount = this.letterCount - 1;
            } else {
                this.letterCount = 0;
                this.letterBlock[this.letterCount - 1].lowerIndex = 0
                this.letterBlock[this.letterCount - 1].upper1Index = 0
                this.letterBlock[this.letterCount - 1].upper2Index = 0
            }
        },
        clear() {
            this.letterBlock = [
                {
                    block: "1", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "2", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "3", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "4", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "5", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "6", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "7", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "8", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
                {
                    block: "9", letter: "", upper1: "",
                    upper1Index: 0,
                    upper2: "",
                    upper2Index: 0,
                    lower: "",
                    lowerIndex: 0
                },
            ];
            this.letterCount = 0;
            this.quizletterreserve.forEach((p) => this.quizletter.push(p));
            this.quizletterreserve = [];
        },
    }



}
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
        font-size: 0.8rem !important
    }
}



:deep(.highlightText) {
    color: green
}

p {
    font-size: 0.8rem;
}

.text-banner {
    width: 100%;
    max-width: 500px;
    background-color: #817FFF;
    border-radius: 0px;
    min-height: 10px;

    .text-banner-inner {
        display: flex;
        justify-content: center;
        min-height: 10px;
        width: 100%;
        background-color: #817FFF;

      .v-card {
            // margin-left: 4px;
            // margin-right: 4px;
            border-radius: 1px;
            border: 1px solid;
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

    .text-banner-inner-hilow {
        display: flex;
        justify-content: center;
        min-height: 10px;
        width: 100%;
        background-color: #817FFF;

        .v-card {
            // margin-left: 4px;
            // margin-right: 4px;
            border-radius: 1px;
            border: 1px solid;
            z-index: 1;
            display: flex;
            justify-content: center;
            max-width: 50px;
            max-height: 26px;
            width: 11vw;
            height: 5.8vw;
            background-color: white;

            img {
            width: 100%;
            }
        }
    }
}


.letter-box {
    margin-top: 10px;
    margin-left: 1px;
    margin-right: 1px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .letter-piece {
        cursor: pointer;
        max-width: 50px;
        max-height: 50px;
        width: 11vw;
        height: 11vw;
    }
}

.answer-box {
    width: 100%;
    max-width: 500px;
    margin-top: 4px;
    border: 1px solid;
    height: 100px;
    overflow: auto;

    .answer-box-inner {
        padding: 4px;
        max-height: 100px;
        width: 100%;
        background-color: white;

        span {
            font-size: 1.8rem;
        }
    }
}

.v-btn p {
    color: white !important;
}

.assist-menu {
    padding-top: 12px;
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

.navation-drawer {
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    background-color: #817FFF;
    color: white;
    bottom: 0;
    height: auto;

    .v-btn:not(.v-btn--round).v-size--default {
        min-width: 20px !important;
        padding: 5px !important;
        margin-left: 1px !important;
        margin-right: 1px !important;
    }
}
</style>
    