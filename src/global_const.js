var React = require('react');
var ReactDOM = require('react-dom');

module.exports.dataForLoad = {}
module.exports._ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

var zenith = {"無し": 0, "★1": 0.01, "★2": 0.03, "★3": 0.05, "★4": 0.06, "★5": 0.08, "★6": 0.10}
var zenithAttackBonus = [3000, 1500, 500, 0];
var zenithHPBonus = [1000, 600, 300, 0];
var skilllevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var considerNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ougiGageBuffList = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var ougiRatioList = [4.0, 4.5, 5.0];
var masterATKList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var masterHPList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var HPList = [ 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
var plusNumList = { "+0": 0, "+1": 1, "+2": 2, "+3": 3, "+4": 4, "+5": 5, "+6": 6, "+7": 7, "+8": 8, "+9": 9, "+10": 10, "+11": 11, "+12": 12, "+13": 13, "+14": 14, "+15": 15, "+16": 16, "+17": 17, "+18": 18, "+19": 19, "+20": 20, "+21": 21, "+22": 22, "+23": 23, "+24": 24, "+25": 25, "+26": 26, "+27": 27, "+28": 28, "+29": 29, "+30": 30, "+31": 31, "+32": 32, "+33": 33, "+34": 34, "+35": 35, "+36": 36, "+37": 37, "+38": 38, "+39": 39, "+40": 40, "+41": 41, "+42": 42, "+43": 43, "+44": 44, "+45": 45, "+46": 46, "+47": 47, "+48": 48, "+49": 49, "+50": 50, "+51": 51, "+52": 52, "+53": 53, "+54": 54, "+55": 55, "+56": 56, "+57": 57, "+58": 58, "+59": 59, "+60": 60, "+61": 61, "+62": 62, "+63": 63, "+64": 64, "+65": 65, "+66": 66, "+67": 67, "+68": 68, "+69": 69, "+70": 70, "+71": 71, "+72": 72, "+73": 73, "+74": 74, "+75": 75, "+76": 76, "+77": 77, "+78": 78, "+79": 79, "+80": 80, "+81": 81, "+82": 82, "+83": 83, "+84": 84, "+85": 85, "+86": 86, "+87": 87, "+88": 88, "+89": 89, "+90": 90, "+91": 91, "+92": 92, "+93": 93, "+94": 94, "+95": 95, "+96": 96, "+97": 97, "+98": 98, "+99": 99}
var levelListLimit = { "Lv. 1": 1, "Lv. 2": 2, "Lv. 3": 3, "Lv. 4": 4, "Lv. 5": 5, "Lv. 6": 6, "Lv. 7": 7, "Lv. 8": 8, "Lv. 9": 9, "Lv. 10": 10, "Lv. 11": 11, "Lv. 12": 12, "Lv. 13": 13, "Lv. 14": 14, "Lv. 15": 15, "Lv. 16": 16, "Lv. 17": 17, "Lv. 18": 18, "Lv. 19": 19, "Lv. 20": 20, "Lv. 21": 21, "Lv. 22": 22, "Lv. 23": 23, "Lv. 24": 24, "Lv. 25": 25, "Lv. 26": 26, "Lv. 27": 27, "Lv. 28": 28, "Lv. 29": 29, "Lv. 30": 30, "Lv. 31": 31, "Lv. 32": 32, "Lv. 33": 33, "Lv. 34": 34, "Lv. 35": 35, "Lv. 36": 36, "Lv. 37": 37, "Lv. 38": 38, "Lv. 39": 39, "Lv. 40": 40, "Lv. 41": 41, "Lv. 42": 42, "Lv. 43": 43, "Lv. 44": 44, "Lv. 45": 45, "Lv. 46": 46, "Lv. 47": 47, "Lv. 48": 48, "Lv. 49": 49, "Lv. 50": 50, "Lv. 51": 51, "Lv. 52": 52, "Lv. 53": 53, "Lv. 54": 54, "Lv. 55": 55, "Lv. 56": 56, "Lv. 57": 57, "Lv. 58": 58, "Lv. 59": 59, "Lv. 60": 60, "Lv. 61": 61, "Lv. 62": 62, "Lv. 63": 63, "Lv. 64": 64, "Lv. 65": 65, "Lv. 66": 66, "Lv. 67": 67, "Lv. 68": 68, "Lv. 69": 69, "Lv. 70": 70, "Lv. 71": 71, "Lv. 72": 72, "Lv. 73": 73, "Lv. 74": 74, "Lv. 75": 75, "Lv. 76": 76, "Lv. 77": 77, "Lv. 78": 78, "Lv. 79": 79, "Lv. 80": 80, "Lv. 81": 81, "Lv. 82": 82, "Lv. 83": 83, "Lv. 84": 84, "Lv. 85": 85, "Lv. 86": 86, "Lv. 87": 87, "Lv. 88": 88, "Lv. 89": 89, "Lv. 90": 90, "Lv. 91": 91, "Lv. 92": 92, "Lv. 93": 93, "Lv. 94": 94, "Lv. 95": 95, "Lv. 96": 96, "Lv. 97": 97, "Lv. 98": 98, "Lv. 99": 99, "Lv. 100": 100}
var levelListNoLimit = { "Lv. 1": 1, "Lv. 2": 2, "Lv. 3": 3, "Lv. 4": 4, "Lv. 5": 5, "Lv. 6": 6, "Lv. 7": 7, "Lv. 8": 8, "Lv. 9": 9, "Lv. 10": 10, "Lv. 11": 11, "Lv. 12": 12, "Lv. 13": 13, "Lv. 14": 14, "Lv. 15": 15, "Lv. 16": 16, "Lv. 17": 17, "Lv. 18": 18, "Lv. 19": 19, "Lv. 20": 20, "Lv. 21": 21, "Lv. 22": 22, "Lv. 23": 23, "Lv. 24": 24, "Lv. 25": 25, "Lv. 26": 26, "Lv. 27": 27, "Lv. 28": 28, "Lv. 29": 29, "Lv. 30": 30, "Lv. 31": 31, "Lv. 32": 32, "Lv. 33": 33, "Lv. 34": 34, "Lv. 35": 35, "Lv. 36": 36, "Lv. 37": 37, "Lv. 38": 38, "Lv. 39": 39, "Lv. 40": 40, "Lv. 41": 41, "Lv. 42": 42, "Lv. 43": 43, "Lv. 44": 44, "Lv. 45": 45, "Lv. 46": 46, "Lv. 47": 47, "Lv. 48": 48, "Lv. 49": 49, "Lv. 50": 50, "Lv. 51": 51, "Lv. 52": 52, "Lv. 53": 53, "Lv. 54": 54, "Lv. 55": 55, "Lv. 56": 56, "Lv. 57": 57, "Lv. 58": 58, "Lv. 59": 59, "Lv. 60": 60, "Lv. 61": 61, "Lv. 62": 62, "Lv. 63": 63, "Lv. 64": 64, "Lv. 65": 65, "Lv. 66": 66, "Lv. 67": 67, "Lv. 68": 68, "Lv. 69": 69, "Lv. 70": 70, "Lv. 71": 71, "Lv. 72": 72, "Lv. 73": 73, "Lv. 74": 74, "Lv. 75": 75, "Lv. 76": 76, "Lv. 77": 77, "Lv. 78": 78, "Lv. 79": 79, "Lv. 80": 80, "Lv. 81": 81, "Lv. 82": 82, "Lv. 83": 83, "Lv. 84": 84, "Lv. 85": 85, "Lv. 86": 86, "Lv. 87": 87, "Lv. 88": 88, "Lv. 89": 89, "Lv. 90": 90, "Lv. 91": 91, "Lv. 92": 92, "Lv. 93": 93, "Lv. 94": 94, "Lv. 95": 95, "Lv. 96": 96, "Lv. 97": 97, "Lv. 98": 98, "Lv. 99": 99, "Lv. 100": 100, "Lv. 101": 101, "Lv. 102": 102, "Lv. 103": 103, "Lv. 104": 104, "Lv. 105": 105, "Lv. 106": 106, "Lv. 107": 107, "Lv. 108": 108, "Lv. 109": 109, "Lv. 110": 110, "Lv. 111": 111, "Lv. 112": 112, "Lv. 113": 113, "Lv. 114": 114, "Lv. 115": 115, "Lv. 116": 116, "Lv. 117": 117, "Lv. 118": 118, "Lv. 119": 119, "Lv. 120": 120, "Lv. 121": 121, "Lv. 122": 122, "Lv. 123": 123, "Lv. 124": 124, "Lv. 125": 125, "Lv. 126": 126, "Lv. 127": 127, "Lv. 128": 128, "Lv. 129": 129, "Lv. 130": 130, "Lv. 131": 131, "Lv. 132": 132, "Lv. 133": 133, "Lv. 134": 134, "Lv. 135": 135, "Lv. 136": 136, "Lv. 137": 137, "Lv. 138": 138, "Lv. 139": 139, "Lv. 140": 140, "Lv. 141": 141, "Lv. 142": 142, "Lv. 143": 143, "Lv. 144": 144, "Lv. 145": 145, "Lv. 146": 146, "Lv. 147": 147, "Lv. 148": 148, "Lv. 149": 149, "Lv. 150": 150 }
var skillLevelListNoLimit = { "SLv. 1": 1, "SLv. 2": 2, "SLv. 3": 3, "SLv. 4": 4, "SLv. 5": 5, "SLv. 6": 6, "SLv. 7": 7, "SLv. 8": 8, "SLv. 9": 9, "SLv. 10": 10, "SLv. 11": 11, "SLv. 12": 12, "SLv. 13": 13, "SLv. 14": 14, "SLv. 15": 15 }
var skillLevelListLimit = { "SLv. 1": 1, "SLv. 2": 2, "SLv. 3": 3, "SLv. 4": 4, "SLv. 5": 5, "SLv. 6": 6, "SLv. 7": 7, "SLv. 8": 8, "SLv. 9": 9, "SLv. 10": 10 }
var summonAmountList = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 100, 120, 200];

var enemyDefenseType = {
    10.0: {"name": "10.0(一般的な敵)"},
    8.0: {"name": "8.0(防御-20%)"},
    7.0: {"name": "7.0(防御-30%)"},
    5.0: {"name": "5.0(防御-50%)"},
    13.0: {"name": "13.0(ティアマグ・シュヴァマグ)"},
    6.5: {"name": "6.5(ティアシュヴァ防御-50%)"},
    11.0: {"name": "11.0(プロバハ?)"},
    5.5: {"name": "5.5(プロバハ(防御-50%))"},
    20.0: {"name": "20.0(プロバハHL?)"},
}
var keyTypes = {
    "totalAttack":"攻撃力(二手技巧無し)",
    "totalHP": "ジータHP",
    "ATKandHP": "戦力",
    "averageAttack": "パーティ平均攻撃力(二手技巧無し)",
    "criticalAttack": "技巧期待値",
    "averageCriticalAttack": "技巧期待平均攻撃力",
    "totalExpected": "総合攻撃*期待回数*技巧期待値",
    "averageTotalExpected": "総回技のパーティ平均値",
    "expectedCycleDamagePerTurn": "予想ターン毎ダメージ",
    "averageCyclePerTurn": "予想ターン毎ダメージのパーティ平均値",
}
var supportedChartSortkeys = {
    "totalAttack": "攻撃力(二手技巧無し)",
    "averageAttack": "パーティ平均攻撃力(二手技巧無し)",
    "criticalAttack": "技巧期待値",
    "averageCriticalAttack": "技巧期待平均攻撃力",
    "expectedCycleDamagePerTurn": "予想ターン毎ダメージ",
    "averageCyclePerTurn": "予想ターン毎ダメージのパーティ平均値",
    "totalHP": "ジータ残りHP",
}
var supportedTurnChartSortkeys = {
    "totalAttack": "攻撃力(二手技巧無し)",
    "averageAttack": "パーティ平均攻撃力(二手技巧無し)",
    "criticalAttack": "技巧期待値",
    "averageCriticalAttack": "技巧期待平均攻撃力",
    "expectedCycleDamagePerTurn": "予想ターン毎ダメージ",
    "averageCyclePerTurn": "予想ターン毎ダメージのパーティ平均値",
}
var supportedSimulationChartSortkeys = {
    "averageAttack": "パーティ平均攻撃力(二手技巧無し)",
    "averageTotalExpected": "総回技のパーティ平均値",
    "expectedDamage": "予想ダメージ",
    "averageExpectedDamage": "予想ダメージのパーティ平均値",
    "summedAverageExpectedDamage": "予想ダメージ平均の積分値",
}

// skill data
var skilltypes = {
    "non": {name: "無し", type:"non", amount: "non"},
    "normalS": {name:"通常攻刃(小)", type:"normal", amount: "S"},
    "normalM": {name:"通常攻刃(中)", type:"normal", amount: "M"},
    "normalL": {name:"通常攻刃(大)", type:"normal", amount: "L"},
    "normalLL": {name:"通常攻刃II", type:"normal", amount: "LL"},
    "normalBoukunL": {name:"通常暴君", type:"normalBoukun", amount: "L"},
    "normalHaisuiS": {name:"通常背水(小)", type:"normalHaisui", amount: "S"},
    "normalHaisuiM": {name:"通常背水(中)", type:"normalHaisui", amount: "M"},
    "normalHaisuiL": {name:"通常背水(大)", type:"normalHaisui", amount: "L"},
    "normalKonshinL": {name:"通常渾身(大)", type:"normalKonshin", amount: "L"},
    "normalNiteS": {name:"通常二手(小)", type:"normalNite", amount: "S"},
    "normalNiteM": {name:"通常二手(中)", type:"normalNite", amount: "M"},
    "normalNiteL": {name:"通常二手(大)", type:"normalNite", amount: "L"},
    "normalSanteL": {name:"通常三手(大)", type:"normalSante", amount: "L"},
    "normalKatsumiM": {name:"通常克己(中)", type:"normalKatsumi", amount: "M"},
    "normalKamui": {name:"通常神威", type:"normalKamui", amount: "S"},
    "magnaM": {name: "マグナ攻刃", type:"magna", amount:"M"},
    "magnaL": {name: "マグナ攻刃II", type:"magna", amount:"L"},
    "magnaHaisuiS": {name:"マグナ背水(小)", type:"magnaHaisui", amount: "S"},
    "magnaHaisuiM": {name:"マグナ背水(中)", type:"magnaHaisui", amount: "M"},
    "magnaHaisuiL": {name:"マグナ背水(大)", type:"magnaHaisui", amount: "L"},
    "magnaSanteL": {name:"マグナ三手(大)", type:"magnaSante", amount: "L"},
    "magnaKatsumiM": {name:"マグナ克己(中)", type:"magnaKatsumi", amount: "M"},
    "magnaKamui": {name:"マグナ神威", type:"magnaKamui", amount: "S"},
    "magnaBoukun": {name:"マグナ暴君", type:"magnaBoukun", amount: "L"},
    "unknownM": {name:"アンノウンATK・I", type:"unknown", amount: "M"},
    "unknownL": {name:"アンノウンATK・II", type:"unknown", amount: "L"},
    "strengthHaisuiM": {name:"ストレングス背水(中)", type:"unknownOtherHaisui", amount: "M"},
    "strengthS": {name:"ストレングス等(小)", type:"unknownOther", amount: "S"},
    "strengthM": {name:"ストレングス等(中)", type:"unknownOther", amount: "M"},
    "strengthL": {name:"ストレングス等(大)", type:"unknownOther", amount: "L"},
    "normalHPS": {name:"通常守護(小)", type:"normalHP", amount: "S"},
    "normalHPM": {name:"通常守護(中)", type:"normalHP", amount: "M"},
    "normalHPL": {name:"通常守護(大)", type:"normalHP", amount: "L"},
    "magnaHPM": {name:"マグナ守護", type:"magnaHP", amount: "M"},
    "magnaHPL": {name:"マグナ守護II", type:"magnaHP", amount: "L"},
    "unknownHPS": {name:"アンノウン・VIT I(小)", type:"unknownHP", amount: "S"},
    "unknownHPM": {name:"アンノウン・VIT I(中)", type:"unknownHP", amount: "M"},
    "unknownHPL": {name:"アンノウン・VIT II(大)", type:"unknownHP", amount: "L"},
    "unknownOtherBoukunL": {name:"ミフネ流・極意", type:"unknownOtherBoukun", amount: "L"},
    "unknownOtherNiteS": {name:"ミフネ流・双星", type:"unknownOtherNite", amount: "S"},
    "gurenJuin": {name:"紅蓮の呪印・弐", type:"gurenJuin", amount: "L"},
    "muhyoTuiga": {name:"霧氷の追牙・肆", type:"muhyoTuiga", amount: "L"},
    "normalCriticalS": {name:"通常技巧(小)", type:"normalCritical", amount: "S"},
    "normalCriticalM": {name:"通常技巧(中)", type:"normalCritical", amount: "M"},
    "normalCriticalL": {name:"通常技巧(大)", type:"normalCritical", amount: "L"},
    "magnaCriticalS": {name:"マグナ技巧(小)", type:"magnaCritical", amount: "S"},
    "magnaCriticalM": {name:"マグナ技巧(中)", type:"magnaCritical", amount: "M"},
    "magnaCriticalL": {name:"マグナ技巧(大)", type:"magnaCritical", amount: "L"},
    "normalSetsuna": {name:"通常刹那", type:"normalSetsuna", amount: "M"},
    "magnaSetsuna": {name:"マグナ刹那", type:"magnaSetsuna", amount: "M"},
    "cosmos-sword": {name:"コスモス剣", type:"cosmosArm", amount: "L", cosmosArm:"sword"},
    "cosmos-dagger": {name:"コスモス短剣", type:"cosmosArm", amount: "L", cosmosArm:"dagger"},
    "cosmos-spear": {name:"コスモス槍", type:"cosmosArm", amount: "L", cosmosArm:"spear"},
    "cosmos-axe": {name:"コスモス斧", type:"cosmosArm", amount: "L", cosmosArm:"axe"},
    "cosmos-wand": {name:"コスモス杖", type:"cosmosArm", amount: "L", cosmosArm:"wand"},
    "cosmos-gun": {name:"コスモス銃", type:"cosmosArm", amount: "L", cosmosArm:"gun"},
    "cosmos-fist": {name:"コスモス拳", type:"cosmosArm", amount: "L", cosmosArm:"fist"},
    "cosmos-bow": {name:"コスモス弓", type:"cosmosArm", amount: "L", cosmosArm:"bow"},
    "cosmos-katana": {name:"コスモス刀", type:"cosmosArm", amount: "L", cosmosArm:"katana"},
    "cosmos-music": {name:"コスモス楽器", type:"cosmosArm", amount: "L", cosmosArm:"music"},
    "cosmosAT": {name:"コスモスAT", type:"cosmos", amount: "L"},
    "cosmosDF": {name:"コスモスDF", type:"cosmos", amount: "L"},
    "cosmosBL": {name:"コスモスBL", type:"cosmos", amount: "L"},
    "bahaAT-dagger": {name:"バハ攻-短剣", type:"bahaAT", amount: "L"},
    "bahaAT-axe": {name:"バハ攻-斧", type:"bahaAT", amount: "L"},
    "bahaAT-spear": {name:"バハ攻-槍", type:"bahaAT", amount: "L"},
    "bahaAT-gun": {name:"バハ攻-銃", type:"bahaAT", amount: "L"},
    "bahaATHP-sword": {name:"バハ攻HP-剣", type:"bahaATHP", amount: "M"},
    "bahaATHP-wand": {name:"バハ攻HP-杖", type:"bahaATHP", amount: "M"},
    "bahaHP-fist": {name:"バハHP-格闘", type:"bahaHP", amount: "L"},
    "bahaHP-katana": {name:"バハHP-刀", type:"bahaHP", amount: "L"},
    "bahaHP-bow": {name:"バハHP-弓", type:"bahaHP", amount: "L"},
    "bahaHP-music": {name:"バハHP-楽器", type:"bahaHP", amount: "L"},
    "bahaFUATHP-dagger": {name:"バハフツ-短剣", type:"bahaFUATHP", amount: "LL"},
    "bahaFUATHP-axe": {name:"バハフツ-斧", type:"bahaFUATHP", amount: "LL"},
    "bahaFUATHP-spear": {name:"バハフツ-槍", type:"bahaFUATHP", amount: "LL"},
    "bahaFUATHP-gun": {name:"バハフツ-銃", type:"bahaFUATHP", amount: "LL"},
    "bahaFUATHP-sword": {name:"バハフツ-剣", type:"bahaFUATHP", amount: "LL"},
    "bahaFUATHP-wand": {name:"バハフツ-杖", type:"bahaFUATHP", amount: "LL"},
    "bahaFUHP-fist": {name:"バハフツHP-格闘", type:"bahaFUHP", amount: "L"},
    "bahaFUHP-katana": {name:"バハフツHP-刀", type:"bahaFUHP", amount: "L"},
    "bahaFUHP-bow": {name:"バハフツHP-弓", type:"bahaFUHP", amount: "L"},
    "bahaFUHP-music": {name:"バハフツHP-楽器", type:"bahaFUHP", amount: "L"},
};

var armTypes = {
    "dagger": "短剣",
    "sword": "剣",
    "spear": "槍",
    "axe": "斧",
    "wand": "杖",
    "gun": "銃",
    "fist": "格闘",
    "bow": "弓",
    "music": "楽器",
    "katana": "刀",
    "none": "無し",
};

var summonTypes = {
    "magna": "マグナ",
    "element": "属性",
    "zeus": "ゼウス系",
    "chara": "キャラ",
    "ranko": "蘭子",
    "odin": "属性攻+キャラ攻",
    "elementTurn": "属性(経過ターン)",
}

var raceTypes = {
    "human": "人間",
    "erune": "エルーン",
    "doraf": "ドラフ",
    "havin": "ハーヴィン",
    "unknown": "種族不明",
}

var jobTypes = {
    "attack": "攻撃",
    "heal": "回復",
    "defense": "防御",
    "pecu": "特殊",
    "balance": "バランス",
}

var elementTypes = {
    "fire": "火",
    "wind": "風",
    "earth": "土",
    "water": "水",
    "light": "光",
    "dark": "闇",
}

var filterElementTypes = {
    "fire": "火",
    "wind": "風",
    "earth": "土",
    "water": "水",
    "light": "光",
    "dark": "闇",
    "all": "全属性",
}

// "key"属性が強い属性と弱い属性
module.exports.elementRelation = {
    "fire": {"weak": "water", "strong": "wind"},
    "wind": {"weak": "fire", "strong": "earth"},
    "earth": {"weak": "wind", "strong": "water"},
    "water": {"weak": "earth", "strong": "fire"},
    "light": {"weak": "none", "strong": "dark"},
    "dark": {"weak": "none", "strong": "light"},
}

module.exports.bahamutRelation = {
    "dagger": {"type1": "human"},
    "axe": {"type1": "doraf"},
    "spear": {"type1": "erune"},
    "gun": {"type1": "havin"},
    "sword": {"type1": "human", "type2": "doraf"},
    "wand": {"type1": "erune", "type2": "havin"},
    "fist": {"type1": "human"},
    "katana": {"type1": "doraf"},
    "bow": {"type1": "erune"},
    "music": {"type1": "havin"},
}

module.exports.bahamutFURelation = {
    "dagger": {"type1": "human", "type2": "erune"},
    "axe": {"type1": "doraf", "type2": "havin"},
    "spear": {"type1": "erune", "type2": "doraf"},
    "gun": {"type1": "havin", "type2": "human"},
    "sword": {"type1": "human", "type2": "doraf"},
    "wand": {"type1": "erune", "type2": "havin"},
    "fist": {"type1": "human"},
    "katana": {"type1": "doraf"},
    "bow": {"type1": "erune"},
    "music": {"type1": "havin"},
}

module.exports.Jobs = {
    "beruse":       {"name": "ベルセルク",       "favArm1": "sword",  "favArm2": "axe",    "type": "attack",  "atBonus": 6000.0, "kouzinBonus": 0.0, "hpBonus": 1000.0, "shugoBonus": 10.0, "DaBonus": 26.5, "TaBonus": 5.5},
    "sage":         {"name": "セージ",           "favArm1": "wand",   "favArm2": "spear",  "type": "heal",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "suparuta":     {"name": "スパルタ",         "favArm1": "sword",  "favArm2": "spear",  "type": "defense", "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 1500.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "warlock":      {"name": "ウォーロック",     "favArm1": "wand",   "favArm2": "dagger", "type": "attack",  "atBonus": 2000.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "chaos":      {"name": "カオスルーダー",     "favArm1": "sword",   "favArm2": "dagger", "type": "pecu",  "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "gizoku":      {"name": "義賊",     "favArm1": "dagger",   "favArm2": "gun", "type": "balance",  "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "alche":        {"name": "アルケミスト",     "favArm1": "dagger", "favArm2": "gun",    "type": "heal",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 100.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "ninja":        {"name": "忍者",             "favArm1": "katana", "favArm2": "fist",   "type": "pecu",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 31.5, "TaBonus": 3.0},
    "samurai":      {"name": "侍",               "favArm1": "katana", "favArm2": "bow",    "type": "attack",  "atBonus": 3000.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "kensei":       {"name": "剣聖",             "favArm1": "sword",  "favArm2": "katana", "type": "pecu",    "atBonus": 1500.0, "kouzinBonus": 0.0, "hpBonus": 300.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "gunsri":       {"name": "ガンスリ",         "favArm1": "gun",    "favArm2": "gun",    "type": "pecu",    "atBonus": 1000.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 11.5, "TaBonus": 3.0},
    "kenja":        {"name": "賢者",             "favArm1": "wand",   "favArm2": "wand",   "type": "pecu",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 1000.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "assassin":     {"name": "アサシン",         "favArm1": "dagger", "favArm2": "dagger", "type": "pecu",    "atBonus": 1000.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "weaponmaster": {"name": "ウェポンマスター", "favArm1": "sword",  "favArm2": "axe",    "type": "attack",  "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 23.0, "TaBonus": 5.0},
    "holyse":       {"name": "ホリセバー",       "favArm1": "sword",  "favArm2": "spear",  "type": "defense", "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "bishop":       {"name": "ビショップ",       "favArm1": "wand",   "favArm2": "spear",  "type": "heal",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "hermit":       {"name": "ハーミット",       "favArm1": "wand",   "favArm2": "dagger", "type": "attack",  "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "hokuai":       {"name": "ホークアイ",       "favArm1": "dagger", "favArm2": "gun",    "type": "balance", "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "darkfe":       {"name": "ダクフェ",         "favArm1": "sword",  "favArm2": "dagger", "type": "pecu",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "oga":          {"name": "オーガ",           "favArm1": "fist",   "favArm2": "fist",   "type": "attack",  "atBonus": 2000.0, "kouzinBonus": 5.0, "hpBonus": 200.0, "shugoBonus": 0.0, "DaBonus": 60.0, "TaBonus": 5.0},
    "side":         {"name": "サイドワインダー", "favArm1": "bow",    "favArm2": "gun",    "type": "balance", "atBonus": 1000.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "superstar":    {"name": "スーパースター",   "favArm1": "music",  "favArm2": "dagger", "type": "pecu",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
    "valc":         {"name": "ヴァルキュリア",   "favArm1": "spear",  "favArm2": "axe",    "type": "attack",  "atBonus": 500.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 11.5, "TaBonus": 8.0},
    "none":         {"name": "なし",             "favArm1": "none",   "favArm2": "none",   "type": "none",    "atBonus": 0.0, "kouzinBonus": 0.0, "hpBonus": 0.0, "shugoBonus": 0.0, "DaBonus": 6.5, "TaBonus": 3.0},
}

var summonElementTypes = {
    "fire": {"name": "火", "type": ["fire"]},
    "wind": {"name": "風", "type": ["wind"]},
    "earth": {"name": "土", "type": ["earth"]},
    "water": {"name": "水", "type": ["water"]},
    "light": {"name": "光", "type": ["light"]},
    "dark": {"name": "闇", "type": ["dark"]},
    "lightFire": {"name": "光/火", "type": ["light", "fire"]},
    "darkEarth": {"name": "闇/土", "type": ["dark", "earth"]},
    "windEarth": {"name": "風/土", "type": ["wind", "earth"]},
    "darkWater": {"name": "闇/水", "type": ["dark", "water"]},
    "earthLight": {"name": "土/光", "type": ["earth", "light"]},
    "windLight": {"name": "風/光", "type": ["wind", "light"]},
    "lightDark": {"name": "光/闇", "type": ["light", "dark"]},
    "darkFire": {"name": "闇/火", "type": ["dark", "fire"]},
    "waterLight": {"name": "水/光", "type": ["water", "light"]},
    "windFire": {"name": "風/火", "type": ["wind", "fire"]},
    "fireWater": {"name": "火/水", "type": ["fire", "water"]},
    "all": {"name": "全属性", "type": ["all"]},
}

var skillAmounts = {
    // normal と unknown の M Slv11 以降については仮入力
    "normal":{
        "S": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 10.4, 10.8, 11.2, 11.6, 12.0],
        "M": [3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 12.0, 12.0, 12.0, 12.0, 12.0],
        "L": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
        "LL": [7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 16.8, 17.6, 18.4, 19.2, 20.0],
    },
    "magna":{
        "S": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 10.4, 10.8, 11.2, 11.6, 12.0],
        "M": [3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5],
        "L": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
    },
    "unknown":{
        "S": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 10.4, 10.8, 11.2, 11.6, 12.0],
        "M": [3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 12.0, 12.0, 12.0, 12.0, 12.0],
        "L": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
        "LL": [7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 16.8, 17.6, 18.4, 19.2, 20.0],
    },
    "unknownOther":{
        "S": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 10.4, 10.8, 11.2, 11.6, 12.0],
        "M": [3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 12.0, 12.0, 12.0, 12.0, 12.0],
        "L": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
        "LL": [7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 16.8, 17.6, 18.4, 19.2, 20.0],
    },
    "bahaHP": {
        // 剣など
        "M": [10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
        "L": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 30.0, 30.4, 30.8, 31.2, 31.6, 32.0],
    },
    "bahaAT": {
        // 短剣など
        "M": [10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 15.0, 30.4, 30.8, 31.2, 31.6, 32.0],
        "L": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 30.0, 30.4, 30.8, 31.2, 31.6, 32.0],
    },
    "bahaFUATHP": {
        // 短剣、剣など
        "HP": [15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
        "AT": [30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.4, 30.8, 31.2, 31.6, 32.0],
    },
    "bahaFUHP": {
        // 拳など
        // "HP": [30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 32.0, 34.0, 36.0, 38.0, 40.0],
        // wiki データ
        "HP": [30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.4, 30.8, 31.2, 31.6, 32.0],
        "DA": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0],
        "TA": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 6.4, 6.8, 7.2, 7.6, 8.0],
    },
    "normalHP":{
        "S": [3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 12.0, 12.0, 12.0, 12.0, 12.0],
        "M": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.4, 15.8, 16.2, 16.6, 17.0],
        "L": [9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 18.6, 19.2, 19.8, 20.4, 21.0],
    },
    "magnaHP":{
        "S": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 10.4, 10.8, 11.2, 11.6, 12.0],
        "M": [3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 12.0, 12.0, 12.0, 12.0, 12.0],
        "L": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
    },
    "unknownHP":{
        "S": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0],
        "M": [3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 12.0, 12.0, 12.0, 12.0, 12.0],
        "L": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0],
        "LL": [6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 15.6, 16.2, 16.8, 17.4, 18.0],
    },
    "normalNite":{
        "S": [0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2],
        "M": [0.7, 1.0, 1.3, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0, 4.3, 4.6, 4.9],
        "L": [1.0, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6, 5.0, 5.4, 5.8, 6.2, 7.0],
    },
    // 仮
    "magnaNite":{
        "S": [0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2],
        "M": [0.7, 1.0, 1.3, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0, 4.3, 4.6, 4.9],
        "L": [1.0, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6, 5.0, 5.4, 5.8, 6.2, 6.6],
    },
    "unknownOtherNite":{
        "S": [0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2],
    },
    "normalSante":{
        "L": [1.0, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6, 5.0, 5.4, 5.8, 6.2, 7.0],
    },
    "magnaSante":{
        "L": [1.0, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6, 5.0, 5.4, 5.8, 6.2, 7.0],
    },
    "normalCritical":{
        "S": [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4],
        "M": [3.0, 3.3, 3.6, 3.9, 4.2, 4.5, 4.8, 5.1, 5.4, 5.7, 6.0, 6.3, 6.7, 7.0, 7.3],
        "L": [4.0, 4.4, 4.8, 5.2, 5.6, 6.0, 6.4, 6.8, 7.2, 7.6, 8.0, 8.4, 8.8, 9.2, 9.6],
        "ratio": 0.5,
    },
    // 仮入力
    "magnaCritical":{
        "S": [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.2, 2.2, 2.3, 2.4],
        "M": [3.0, 3.3, 3.6, 3.9, 4.2, 4.5, 4.8, 5.1, 5.4, 5.7, 6.0, 6.3, 6.7, 7.0, 7.3],
        "L": [4.0, 4.4, 4.8, 5.2, 5.6, 6.0, 6.4, 6.8, 7.2, 7.6, 8.0, 8.4, 8.8, 9.2, 9.6],
        "ratio": 0.5,
    },
}

module.exports.zenith = zenith
module.exports.raceTypes = raceTypes
module.exports.skillAmounts = skillAmounts
module.exports.elementTypes = elementTypes
module.exports.filterElementTypes = filterElementTypes
module.exports.summonTypes = summonTypes
module.exports.skilltypes = skilltypes
module.exports.jobTypes = jobTypes
module.exports.armTypes = armTypes
module.exports.summonElementTypes = summonElementTypes
module.exports.keyTypes = keyTypes
module.exports.supportedTurnChartSortkeys = supportedTurnChartSortkeys
module.exports.supportedChartSortkeys = supportedChartSortkeys
module.exports.supportedSimulationChartSortkeys = supportedSimulationChartSortkeys
module.exports.enemyDefenseType = enemyDefenseType

// オプション用
module.exports.selector = {}
module.exports.selector.races = Object.keys(raceTypes).map(function(opt){return <option value={opt} key={opt}>{raceTypes[opt]}</option>;});
module.exports.selector.elements = Object.keys(elementTypes).map(function(opt){return <option value={opt} key={opt}>{elementTypes[opt]}</option>;});
module.exports.selector.filterelements = Object.keys(filterElementTypes).map(function(opt){return <option value={opt} key={opt}>{filterElementTypes[opt]}</option>;});
module.exports.selector.summons = Object.keys(summonTypes).map(function(opt){return <option value={opt} key={opt}>{summonTypes[opt]}</option>;});
module.exports.selector.skills = Object.keys(skilltypes).map(function(key){ return <option value={key} key={key}>{skilltypes[key].name}</option>;})
module.exports.selector.types = Object.keys(jobTypes).map(function(opt){return <option value={opt} key={opt}>{jobTypes[opt]}</option>;});
module.exports.selector.armtypes = Object.keys(armTypes).map(function(opt){return <option value={opt} key={opt}>{armTypes[opt]}</option>;});
module.exports.selector.summonElements = Object.keys(summonElementTypes).map(function(opt){return <option value={opt} key={opt}>{summonElementTypes[opt].name}</option>;});
module.exports.selector.summonAmounts = summonAmountList.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.zenithAttack = zenithAttackBonus.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.zenithHP = zenithHPBonus.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.slv = skilllevels.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.consider = considerNum.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.ougiGageBuff = ougiGageBuffList.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.ougiRatio = ougiRatioList.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.hplist = HPList.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.masteratk = masterATKList.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.masterhp = masterHPList.map(function(opt){return <option value={opt} key={opt}>{opt}</option>;});
module.exports.selector.ktypes = Object.keys(keyTypes).map(function(opt){ return <option value={opt} key={opt}>{keyTypes[opt]}</option> });
module.exports.selector.plusnum = Object.keys(plusNumList).map(function(opt){ return <option value={plusNumList[opt]} key={opt}>{opt}</option> });
module.exports.selector.levelNoLimit = Object.keys(levelListNoLimit).map(function(opt){ return <option value={levelListNoLimit[opt]} key={opt}>{opt}</option> });
module.exports.selector.levelLimit = Object.keys(levelListLimit).map(function(opt){ return <option value={levelListLimit[opt]} key={opt}>{opt}</option> });
module.exports.selector.skilllevelNoLimit = Object.keys(skillLevelListNoLimit).map(function(opt){ return <option value={skillLevelListNoLimit[opt]} key={opt}>{opt}</option> });
module.exports.selector.skilllevelLimit = Object.keys(skillLevelListLimit).map(function(opt){ return <option value={skillLevelListLimit[opt]} key={opt}>{opt}</option> });
module.exports.selector.supported_chartsortkeys = Object.keys(supportedChartSortkeys).map(function(opt){ return <option value={opt} key={opt}>{supportedChartSortkeys[opt]}</option> });
module.exports.selector.supported_turnchartsortkeys = Object.keys(supportedTurnChartSortkeys).map(function(opt){ return <option value={opt} key={opt}>{supportedTurnChartSortkeys[opt]}</option> });
module.exports.selector.supported_simulationchartsortkeys = Object.keys(supportedSimulationChartSortkeys).map(function(opt){ return <option value={opt} key={opt}>{supportedSimulationChartSortkeys[opt]}</option> });
module.exports.selector.enemydeftypes = Object.keys(enemyDefenseType).map(function(opt){return <option value={opt} key={opt}>{enemyDefenseType[opt].name}</option>;});
