gdjs.EquipmentCode = {};
gdjs.EquipmentCode.localVariables = [];
gdjs.EquipmentCode.GDDropTextObjects1= [];
gdjs.EquipmentCode.GDDropTextObjects2= [];
gdjs.EquipmentCode.GDShattertextObjects1= [];
gdjs.EquipmentCode.GDShattertextObjects2= [];
gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.EquipmentCode.GDDropText2Objects1= [];
gdjs.EquipmentCode.GDDropText2Objects2= [];
gdjs.EquipmentCode.GDShattertext2Objects1= [];
gdjs.EquipmentCode.GDShattertext2Objects2= [];
gdjs.EquipmentCode.GDBigtextObjects1= [];
gdjs.EquipmentCode.GDBigtextObjects2= [];
gdjs.EquipmentCode.GDbigtext2Objects1= [];
gdjs.EquipmentCode.GDbigtext2Objects2= [];
gdjs.EquipmentCode.GDRaintextObjects1= [];
gdjs.EquipmentCode.GDRaintextObjects2= [];
gdjs.EquipmentCode.GDRaintext2Objects1= [];
gdjs.EquipmentCode.GDRaintext2Objects2= [];
gdjs.EquipmentCode.GDShatterpegUIObjects1= [];
gdjs.EquipmentCode.GDShatterpegUIObjects2= [];
gdjs.EquipmentCode.GDballUIObjects1= [];
gdjs.EquipmentCode.GDballUIObjects2= [];
gdjs.EquipmentCode.GDDropPegUIObjects1= [];
gdjs.EquipmentCode.GDDropPegUIObjects2= [];
gdjs.EquipmentCode.GDBigPegGUIObjects1= [];
gdjs.EquipmentCode.GDBigPegGUIObjects2= [];
gdjs.EquipmentCode.GDPegspitterguiObjects1= [];
gdjs.EquipmentCode.GDPegspitterguiObjects2= [];


gdjs.EquipmentCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.EquipmentCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EquipmentCode.GDDropTextObjects1.length = 0;
gdjs.EquipmentCode.GDDropTextObjects2.length = 0;
gdjs.EquipmentCode.GDShattertextObjects1.length = 0;
gdjs.EquipmentCode.GDShattertextObjects2.length = 0;
gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.EquipmentCode.GDDropText2Objects1.length = 0;
gdjs.EquipmentCode.GDDropText2Objects2.length = 0;
gdjs.EquipmentCode.GDShattertext2Objects1.length = 0;
gdjs.EquipmentCode.GDShattertext2Objects2.length = 0;
gdjs.EquipmentCode.GDBigtextObjects1.length = 0;
gdjs.EquipmentCode.GDBigtextObjects2.length = 0;
gdjs.EquipmentCode.GDbigtext2Objects1.length = 0;
gdjs.EquipmentCode.GDbigtext2Objects2.length = 0;
gdjs.EquipmentCode.GDRaintextObjects1.length = 0;
gdjs.EquipmentCode.GDRaintextObjects2.length = 0;
gdjs.EquipmentCode.GDRaintext2Objects1.length = 0;
gdjs.EquipmentCode.GDRaintext2Objects2.length = 0;
gdjs.EquipmentCode.GDShatterpegUIObjects1.length = 0;
gdjs.EquipmentCode.GDShatterpegUIObjects2.length = 0;
gdjs.EquipmentCode.GDballUIObjects1.length = 0;
gdjs.EquipmentCode.GDballUIObjects2.length = 0;
gdjs.EquipmentCode.GDDropPegUIObjects1.length = 0;
gdjs.EquipmentCode.GDDropPegUIObjects2.length = 0;
gdjs.EquipmentCode.GDBigPegGUIObjects1.length = 0;
gdjs.EquipmentCode.GDBigPegGUIObjects2.length = 0;
gdjs.EquipmentCode.GDPegspitterguiObjects1.length = 0;
gdjs.EquipmentCode.GDPegspitterguiObjects2.length = 0;

gdjs.EquipmentCode.eventsList0(runtimeScene);
gdjs.EquipmentCode.GDDropTextObjects1.length = 0;
gdjs.EquipmentCode.GDDropTextObjects2.length = 0;
gdjs.EquipmentCode.GDShattertextObjects1.length = 0;
gdjs.EquipmentCode.GDShattertextObjects2.length = 0;
gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.EquipmentCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.EquipmentCode.GDDropText2Objects1.length = 0;
gdjs.EquipmentCode.GDDropText2Objects2.length = 0;
gdjs.EquipmentCode.GDShattertext2Objects1.length = 0;
gdjs.EquipmentCode.GDShattertext2Objects2.length = 0;
gdjs.EquipmentCode.GDBigtextObjects1.length = 0;
gdjs.EquipmentCode.GDBigtextObjects2.length = 0;
gdjs.EquipmentCode.GDbigtext2Objects1.length = 0;
gdjs.EquipmentCode.GDbigtext2Objects2.length = 0;
gdjs.EquipmentCode.GDRaintextObjects1.length = 0;
gdjs.EquipmentCode.GDRaintextObjects2.length = 0;
gdjs.EquipmentCode.GDRaintext2Objects1.length = 0;
gdjs.EquipmentCode.GDRaintext2Objects2.length = 0;
gdjs.EquipmentCode.GDShatterpegUIObjects1.length = 0;
gdjs.EquipmentCode.GDShatterpegUIObjects2.length = 0;
gdjs.EquipmentCode.GDballUIObjects1.length = 0;
gdjs.EquipmentCode.GDballUIObjects2.length = 0;
gdjs.EquipmentCode.GDDropPegUIObjects1.length = 0;
gdjs.EquipmentCode.GDDropPegUIObjects2.length = 0;
gdjs.EquipmentCode.GDBigPegGUIObjects1.length = 0;
gdjs.EquipmentCode.GDBigPegGUIObjects2.length = 0;
gdjs.EquipmentCode.GDPegspitterguiObjects1.length = 0;
gdjs.EquipmentCode.GDPegspitterguiObjects2.length = 0;


return;

}

gdjs['EquipmentCode'] = gdjs.EquipmentCode;
