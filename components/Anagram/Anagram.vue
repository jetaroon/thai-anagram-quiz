<template>
    <div class="d-flex flex-column align-center mt-5">

        <div style="width: 100%; max-width: 500px;">
            <v-toolbar color="#817FFF" class="d-flex justify-center"><v-btn @click="isSelectMode = true">หมวด{{
                searchMode }}</v-btn></v-toolbar>
            <v-toolbar color="#817FFF">
                <v-text-field v-model="search" :disabled="isSearchLoading" outlined hide-details
                    @keydown.prevent.enter="stringSearch()"></v-text-field>
                <v-btn class="ml-1 mr-1" @click="stringSearch()" :disabled="isSearchLoading" color="success"
                    :loading="isSearchLoading">ค้นหา</v-btn>
                <v-btn @click="back()">กลับ</v-btn></v-toolbar>
            <v-progress-linear indeterminate color="amber" v-if="isSearchLoading"></v-progress-linear>
        </div>

        <div class="mt-2" v-if="isSearchLoading">กำลังค้นหา...</div>
        <div class="mt-2" v-if="isSearchInitiate & !isSearchLoading">ผลการค้นหา {{ fieldSearch.length }} คำ</div>

        <div style="width: 100%; max-width: 500px;" class="mt-2" v-if="fieldSearch.length > 0">


            <v-virtual-scroll class="resultBox" :items="fieldSearch" item-height="30">

                <template v-slot="{ item, index }">
                    <div :key="index" class="text-center pa-2">
                        <div v-html="hightlight(item.Word)"></div>
                    </div>

                </template>
            </v-virtual-scroll>



        </div>

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
        <v-dialog transition="dialog-top-transition" max-width="500" v-model="isSelectMode" persistent>
            <v-card class="d-flex flex-column align-center">
                <v-toolbar color="#817FFF" dark width="100%">กรุณาเลือกหมวด</v-toolbar>
                <div class="d-flex flex-wrap justify-center my-2">
                    <v-btn class="mr-2 mt-1" @click="confirmMode('ค้นหา')"
                        :color="searchMode == 'ค้นหา' ? 'success' : ''">ค้นหา</v-btn>
                    <v-btn class="mr-2 mt-1" @click="confirmMode('คำขึ้นต้น')"
                        :color="searchMode == 'คำขึ้นต้น' ? 'success' : ''">คำขึ้นต้น</v-btn>
                    <v-btn class="mr-2 mt-1" @click="confirmMode('คำประกอบด้วย')"
                        :color="searchMode == 'คำประกอบด้วย' ? 'success' : ''">คำประกอบด้วย</v-btn>
                    <v-btn class="mr-2 mt-1" @click="confirmMode('คำลงท้าย')"
                        :color="searchMode == 'คำลงท้าย' ? 'success' : ''">คำลงท้าย</v-btn>
                    <v-btn class="mr-2 mt-1" @click="confirmMode('จับสลับอักษร')"
                        :color="searchMode == 'จับสลับอักษร' ? 'success' : ''">จับสลับอักษร</v-btn>
                    <v-btn class="mt-1" @click="confirmMode('สร้างคำ')"
                        :color="searchMode == 'สร้างคำ' ? 'success' : ''">สร้างคำ</v-btn>

                </div>

                <v-card-actions class="justify-end">
                    <v-btn text @click="isSelectMode = false">ปิด</v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>


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
    name: "Anagram",
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
            isActive: false,
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
            isSearchInitiate: false,
            isSelectMode: false,
            isSearchLoading: false,
            snackbar: false,
            snackbarCorrect: false,
            textIncorrect: "คำตอบไม่ถูกต้อง!",
            textCorrect: "ถูกต้องนะครับ!",
            timeout: 1000,
            vowelPosition: "",
            vowelSelection: false,
            vowelBlock: 0,
            search: "",
            searchMode: "ค้นหา",
            itemSearchMode: [
                "ค้นหา",
                "คำขึ้นต้น",
                "คำประกอบด้วย",
                "คำลงท้าย",
                "จับสลับอักษร",
                "สร้างคำ"
            ],
            fieldSearch: [],
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
                this.back()
            }, 1000);

        } else {
            this.loading = false
        }




    },
    methods: {
        async back() {
            this.isSearchInitiate = false
            this.searchMode = "ค้นหา"
            this.$emit("returnHomepage", true);
        },

        async confirmMode(mode) {
            this.searchMode = mode
            this.isSelectMode = false


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

        hightlight(value) {
            if (!this.search) {
                return value;
            }
            if (this.search.includes("?")) {
                let trim = this.search.replaceAll("?", "");
                return value.replace(new RegExp(trim, "gi"), (match) => {
                    return '<span class="highlightText">' + match + "</span>";
                });
            } else {
                return value.replace(new RegExp(this.search, "gi"), (match) => {
                    return '<span class="highlightText">' + match + "</span>";
                });
            }
        },

        async stringSearch() {
            this.isSearchLoading = true
            this.isSearchInitiate = true
            this.fieldSearch = []
            const db = await royal_thai54_db.open();
            if (this.searchMode == "ค้นหา") {
                try {
                    const data = await db.data.where("Word").equals(this.search).toArray()
                    if (data.length > 0) {
                        this.fieldSearch = data
                        this.isSearchLoading = false
                        console.log(data)
                    } else {
                        this.isSearchLoading = false
                        console.log(data)
                    }
                } catch (error) { }
            }
            if (this.searchMode == "คำขึ้นต้น") {
                try {
                    const data = await db.data.where("Word").startsWith(this.search).toArray()
                    if (data.length > 0) {
                        this.fieldSearch = data
                        this.isSearchLoading = false
                        console.log(data)
                    } else {
                        this.isSearchLoading = false
                        console.log(data)
                    }
                } catch (error) { }

            }
            if (this.searchMode == "คำประกอบด้วย") {
                try {
                    const data = await db.data.filter(p => p.Word.includes(this.search)).toArray()
                    if (data.length > 0) {
                        this.fieldSearch = data
                        this.isSearchLoading = false
                        console.log(data)
                    } else {
                        this.isSearchLoading = false
                        console.log(data)
                    }
                } catch (error) { }

            }
            if (this.searchMode == "คำลงท้าย") {
                try {
                    const data = await db.data.where("WordReverse").startsWith(this.search.split('').reverse().join('')).toArray()
                    if (data.length > 0) {
                        this.fieldSearch = data
                        this.isSearchLoading = false
                        console.log(data)
                    } else {
                        this.isSearchLoading = false
                        console.log(data)
                    }
                } catch (error) { }
            }
            if (this.searchMode == "จับสลับอักษร") {
                let thaiCharactersRegex = /[ิีึื่้๊๋ั็์ุู]/;
                if (thaiCharactersRegex.test(this.search) == false) {
                    if(this.search.includes("?")) {
                        let filter_string = this.search.replaceAll("?", "");
                        try {
                        const data = await db.data.filter(p => p.WordFilter.split("").sort().join("").includes(filter_string.split("").sort().join("")) & p.WordFilter.length == this.search.length).toArray()
                        if (data.length > 0) {
                            this.fieldSearch = data
                            this.isSearchLoading = false
                            console.log(data)
                        } else {
                            this.isSearchLoading = false
                            console.log(data)
                        }
                    } catch (error) { }
                    }
                    if(!this.search.includes("?")) {
                    try {
                        const data = await db.data.filter(p => p.WordFilter.split("").sort().join("") == this.search.split("").sort().join("")).toArray()
                        if (data.length > 0) {
                            this.fieldSearch = data
                            this.isSearchLoading = false
                            console.log(data)
                        } else {
                            this.isSearchLoading = false
                            console.log(data)
                        }
                    } catch (error) { }
                }
                }
                if (thaiCharactersRegex.test(this.search) == true) {
                    if(this.search.includes("?")) {
                        let filter_string = this.search.replaceAll("?", "");
                        let filter_length = this.filterString(this.search)
                        console.log('filter_string', filter_string.split("").sort().join(""))
                        console.log('filter_length', filter_length)
                        try {
                        const data = await db.data.filter(p => p.Word.split("").sort().join("").includes(filter_string.split("").sort().join(""))).toArray()
                        if (data.length > 0) {
                            this.fieldSearch = data
                            this.isSearchLoading = false
                            console.log(data)
                        } else {
                            this.isSearchLoading = false
                            console.log(data)
                        }
                    } catch (error) { }
                    }

                     if(!this.search.includes("?")) {
                    try {
                        const data = await db.data.filter(p => p.Word.split("").sort().join("") == this.search.split("").sort().join("")).toArray()
                        if (data.length > 0) {
                            this.fieldSearch = data
                            this.isSearchLoading = false
                            console.log(data)
                        } else {
                            this.isSearchLoading = false
                            console.log(data)
                        }
                    } catch (error) { }
                }
                }

            }
        },
        findIntersection(length) {
            let array = this.filter_array.flat();
            const frequency = {};
            const filteredArray = [];

            for (let i = 0; i < array.length; i++) {
                const element = array[i].Word;
                frequency[element] = (frequency[element] || 0) + 1;
            }
            // Filter elements based on the frequency count
            for (let i = 0; i < array.length; i++) {
                const element = array[i].Word;
                if (frequency[element] === length && !filteredArray.includes(element)) {
                    filteredArray.push(element);
                }
            }
            for (let i = 0; i < filteredArray.length; i++) {
                if (
                    String(
                        filteredArray[i]
                            .split("")
                            .sort()
                            .filter(
                                (p, index, self) => self.indexOf(p) != self.lastIndexOf(p)
                            )
                    ).includes(String(this.duplicateAlphabet))
                )
                    this.success_array.push(filteredArray[i]);
            }
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

.resultBox {
    border-radius: 4px;
    border: 5px solid #817FFF;
    width: 100%;
    max-width: 500px;
    min-height: 66px;
    max-height: 300px;
    overflow: auto;
    font-size: 1.3rem;
    text-wrap: nowrap;
}

:deep(.highlightText) {
    color: green;
}
</style>