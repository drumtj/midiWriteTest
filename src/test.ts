//test file
import MidiWriter from "midi-writer-js";
import { parseArrayBuffer } from 'midi-json-parser';

let sampleInstruments = {
  "PlasticSynth": {
    midi:{
      instrument: 1,
      channel: 1
    },
    notes: [
      'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
      'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
      'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5'
    ].reverse()
  },

  "DefaultDrumSynth": {
    midi:{
      instrument: 1,
      channel: 9,
      keys: {
        'kick': 'C2',
        'bass': 'D#1',
        'snare': 'D2',
        'oh': 'G#2',
        'ch': 'F#2'
      }
    },
    notes: ['oh', 'ch', 'snare', 'kick', 'bass']
  }
};

let samplePlayData = {"bpm":130,"data":[{"instName":"Synth","trackIndex":0,"supportMusicScore":true,"data":[{},{},{"0":["C3"],"6":["C4"],"12":["F3"],"18":["F4"],"24":["C4"],"28":["A#3"]},{"0":["C3"],"6":["C4"],"12":["F3"],"18":["F4"],"22":["D#4"],"24":["C4"],"28":["C4"]},{"0":["C3"],"3":["C4"],"6":["F3"],"12":["D#3"],"16":["C4"],"18":["D#4"],"24":["D#4"],"26":["C4"],"28":["C4"],"30":["G3"]},{"0":["C3"],"3":["D#3"],"6":["C4"],"12":["D#3"],"14":["C4"],"18":["D#4"],"24":["A#3"],"28":["C4"]},{"0":["F4"],"6":["G4"],"8":["D#4"],"12":["F4"],"16":["D#4"],"24":["D#4"],"28":["D#4"]},{"0":["C3"],"1":["D#3"],"2":["G3"],"4":["D#3"],"6":["F3"],"7":["G3"],"12":["D#3"],"14":["F3"],"16":["G3"],"18":["C4"],"20":["C4"],"22":["D#4"],"24":["D#3"],"27":["D#3"]}]},{"instName":"DefaultDrumSynth","trackIndex":1,"supportMusicScore":true,"musicScoreKeys":{"bass":"D/4","kick":"F/4","snare":"C/5","ch":"G/5/X2","oh":"G/5/X1"},"data":[{"0":["kick"],"4":["kick"],"8":["kick"],"12":["kick"],"16":["kick"],"20":["kick"],"24":["kick"],"28":["kick"]},{"0":["kick"],"4":["snare","kick"],"8":["kick"],"12":["snare","kick"],"16":["kick"],"20":["snare","kick"],"24":["kick"],"28":["snare","kick"]},{"0":["ch","kick"],"2":["ch","bass"],"4":["ch","snare","kick"],"6":["ch","bass"],"8":["ch","kick"],"10":["ch","bass"],"12":["ch","snare","kick"],"14":["ch","bass"],"16":["ch","kick"],"18":["ch","bass"],"20":["ch","snare","kick"],"22":["ch","bass"],"24":["ch","kick"],"26":["ch","bass"],"28":["ch","snare","kick"],"30":["ch","bass"]},{"0":["ch","kick"],"2":["ch","bass"],"4":["ch","snare","kick"],"6":["ch","bass"],"8":["ch","kick"],"10":["ch","bass"],"12":["ch","snare","kick"],"14":["ch","bass"],"16":["ch","kick"],"18":["ch","bass"],"20":["ch","snare","kick"],"22":["ch","bass"],"24":["ch","kick"],"26":["ch","bass"],"28":["ch","snare","kick"],"30":["ch","bass"]},{"0":["ch","kick"],"2":["ch","bass"],"4":["ch","snare","kick"],"6":["ch","bass"],"8":["ch","kick"],"10":["ch","bass"],"12":["ch","snare","kick"],"14":["ch","bass"],"16":["ch","kick"],"18":["ch","bass"],"20":["ch","snare","kick"],"22":["ch","bass"],"24":["ch","kick"],"26":["ch","bass"],"28":["ch","snare","kick"],"30":["ch","bass"]},{"0":["ch","kick"],"1":["kick"],"2":["ch","bass"],"4":["ch","snare","kick"],"5":["ch"],"6":["ch","bass"],"7":["snare","bass"],"8":["ch","kick"],"10":["ch","bass"],"12":["ch","snare","kick"],"13":["ch","kick"],"14":["ch","bass"],"16":["ch","kick"],"18":["ch","bass"],"19":["bass"],"20":["ch","snare","kick"],"21":["ch","kick"],"22":["ch","bass"],"23":["snare"],"24":["ch","kick"],"25":["snare"],"26":["ch","bass"],"28":["ch","snare","kick"],"29":["ch"],"30":["ch","bass"]},{"0":["ch","kick"],"1":["kick"],"2":["ch","bass"],"4":["ch","snare","kick"],"5":["ch"],"6":["ch","bass"],"7":["snare","bass"],"8":["ch","kick"],"10":["ch","bass"],"12":["ch","snare","kick"],"13":["ch","kick"],"14":["ch","bass"],"16":["ch","kick"],"18":["ch","bass"],"19":["bass"],"20":["ch","snare","kick"],"21":["ch","kick"],"22":["ch","bass"],"23":["snare"],"24":["ch","kick"],"25":["snare"],"26":["ch","bass"],"28":["ch","snare","kick"],"29":["ch"],"30":["ch","bass"]},{"0":["ch","kick"],"1":["kick"],"2":["ch","bass"],"4":["ch","snare","kick"],"5":["ch"],"6":["ch","bass"],"7":["snare","bass"],"8":["ch","kick"],"10":["ch","bass"],"12":["ch","snare","kick"],"13":["ch","kick"],"14":["ch","bass"],"16":["ch","kick"],"18":["ch","bass"],"19":["bass"],"20":["ch","snare","kick"],"21":["ch","kick"],"22":["ch","bass"],"23":["snare"],"24":["ch","kick"],"25":["snare"],"26":["ch","bass"],"28":["ch","snare","kick"],"29":["ch"],"30":["ch","bass"]}]}]};

function build(playData, instrumentInfos) {
  let tracks = [];
  console.log("\t building... playData", playData);
  playData.data.forEach((trackData, k) => {
    let notes = [];
    let track = new MidiWriter.Track();
    track.setTempo(playData.bpm);

    let restSum = [];
    let channel;
    let convert;
    if (instrumentInfos[trackData.instName] && instrumentInfos[trackData.instName].midi) {
      channel = instrumentInfos[trackData.instName].midi.channel;
      if (instrumentInfos[trackData.instName].midi.keys) {
        convert = (note) => {
          return instrumentInfos[trackData.instName].midi.keys[note];
        }
      }
      if (typeof instrumentInfos[trackData.instName].midi.instrument !== "undefined") {
        // console.error("ProgramChangeEvent", trackData.instName, instrumentInfos[trackData.instName].midi.instrument);
        track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: instrumentInfos[trackData.instName].midi.instrument }));
      }
    } else {
      channel = 1;
    }

    trackData.data.forEach((node, ni) => {
      let isEmptyNode = true;
      for (let o in node) {
        isEmptyNode = false;
        break;
      }

      if (isEmptyNode) {
        //because a node has 16beat note * 32
        restSum.push(1, 1);
      } else {
        for (let i = 0; i < 32; i++) {
          if (node[i]) {
            console.log("\t building... track:", tracks.length, "channel:", channel);
            notes.push(new MidiWriter.NoteEvent({ pitch: convert ? node[i].map(convert) : node[i], duration: '16', wait: restSum, velocity: 100, channel: channel }));
            restSum = [];
          } else {
            restSum.push(16);
          }
        }
      }
    });
    track.addEvent(notes);
    tracks.push(track);
  });

  return new MidiWriter.Writer(tracks);
}

function exportBlob(playData, instrumentInfos){
  return new Blob([build(playData, instrumentInfos).buildFile()], {type:"audio/midi"});
}

let downloadTempTag;
function downloadMidi(blob){
  if(!downloadTempTag){
    downloadTempTag = document.createElement('a');
  }

  downloadTempTag.href = URL.createObjectURL(blob);
  downloadTempTag.download = new Date().toISOString() + '.mid';
  downloadTempTag.innerHTML = downloadTempTag.download;
  downloadTempTag.click();
  URL.revokeObjectURL ( downloadTempTag.href );
}


function blobToArrayBuffer(blob, done:(arrayBuffer)=>void):any{
  let reader = new FileReader();
  reader.readAsArrayBuffer(blob);
  reader.onloadend = function() {
    done(reader.result);
  }
}



function test1(done:(midiJson)=>void){
  console.error("----------------start test1---------------");
  console.error("set channel to 9");
  sampleInstruments.DefaultDrumSynth.midi.channel = 9;
  console.error("build blob");
  let blob = exportBlob(samplePlayData, sampleInstruments);
  console.error("parse midi");


  blobToArrayBuffer(blob, arrayBuffer=>{
    parseArrayBuffer(arrayBuffer).then(json=>{
        console.log("midi data:", json);
        console.log("track1, check channel!!", json.tracks[0][1]);
        console.log("track2, check channel!!", json.tracks[1][2]);
        done(json);
    });
  })
  console.error("Listen to the downloaded midi file and check the drum part.");
  downloadMidi(blob);
}

function test2(done:(midiJson)=>void){
  console.error("----------------start test2---------------");
  console.error("set channel to 10");
  sampleInstruments.DefaultDrumSynth.midi.channel = 10;
  console.error("build blob");
  let blob = exportBlob(samplePlayData, sampleInstruments);
  console.error("parse midi");
  blobToArrayBuffer(blob, arrayBuffer=>{
    parseArrayBuffer(arrayBuffer).then(json=>{
        console.log("midi data:", json);
        console.log("track1, check channel!!", json.tracks[0][1]);
        console.log("track2, check channel!!", json.tracks[1][2]);
        done(json);
    });
  })
  console.error("Listen to the downloaded midi file and check the drum part.");
  downloadMidi(blob);
}

export {
  test1, test2
}
