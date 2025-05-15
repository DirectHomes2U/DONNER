var APP_DATA = {
  "scenes": [
    {
      "id": "0-EXTERIOR 1",
      "name": "0-EXTERIOR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.010089998699999825,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -0.42400527057003856,
          "pitch": -0.12229510769768481,
          "rotation": 0,
          "target": "1-EXTERIOR DECK"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-EXTERIOR DECK",
      "name": "1-EXTERIOR DECK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6669261547902465,
          "pitch": 0.25789312630362105,
          "rotation": 0,
          "target": "0-EXTERIOR 1"
        },
        {
          "yaw": 0.15042984103184054,
          "pitch": 0.13916469135210363,
          "rotation": 0,
          "target": "2-LIVING ROOM"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-LIVING ROOM",
      "name": "2-LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5148202394697545,
          "pitch": 0.19760666642061864,
          "rotation": 0,
          "target": "1-EXTERIOR DECK"
        },
        {
          "yaw": 0.7973318590016429,
          "pitch": 0.22791807422823496,
          "rotation": 0,
          "target": "4-CORRIDOR"
        },
        {
          "yaw": -0.6568290030749679,
          "pitch": 0.09126492695029853,
          "rotation": 0,
          "target": "3-KITCHEN"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-KITCHEN",
      "name": "3-KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6542093615515778,
          "pitch": 0.17909698668391982,
          "rotation": 0,
          "target": "2-LIVING ROOM"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-CORRIDOR",
      "name": "4-CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1286272343928143,
          "pitch": 0.12529350682843088,
          "rotation": 0,
          "target": "2-LIVING ROOM"
        },
        {
          "yaw": -2.183667886448145,
          "pitch": 0.07030818817657725,
          "rotation": 0,
          "target": "3-KITCHEN"
        },
        {
          "yaw": 2.318415694736868,
          "pitch": 0.19233278069772552,
          "rotation": 0,
          "target": "1-EXTERIOR DECK"
        },
        {
          "yaw": 0.7853871637046108,
          "pitch": 0.22845866244776758,
          "rotation": 0,
          "target": "5-CORRIDOR 2"
        },
        {
          "yaw": -1.0384259642103721,
          "pitch": 0.9067869269158138,
          "rotation": 0,
          "target": "11-CORRIDOR 4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-CORRIDOR 2",
      "name": "5-CORRIDOR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3057333000374527,
          "pitch": 0.15145445226567134,
          "rotation": 0,
          "target": "6-BEDROOM 3"
        },
        {
          "yaw": 1.5491167614738526,
          "pitch": 0.12296156787629364,
          "rotation": 0,
          "target": "7-CORRIDOR 3"
        },
        {
          "yaw": -1.485678362390562,
          "pitch": 0.20283804059393873,
          "rotation": 0,
          "target": "4-CORRIDOR"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-BEDROOM 3",
      "name": "6-BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26009182635990413,
          "pitch": 0.21994019514625407,
          "rotation": 0,
          "target": "5-CORRIDOR 2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-CORRIDOR 3",
      "name": "7-CORRIDOR 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4847644975335559,
          "pitch": 0.3146166395707244,
          "rotation": 0,
          "target": "8-BEDROOM 2"
        },
        {
          "yaw": 2.5947877391371525,
          "pitch": 0.4121835227896735,
          "rotation": 0,
          "target": "5-CORRIDOR 2"
        },
        {
          "yaw": 0.4936716376271377,
          "pitch": 0.20414395960338538,
          "rotation": 0,
          "target": "9-MASTER BEDROOM"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-BEDROOM 2",
      "name": "8-BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.887402526978134,
          "pitch": 0.11445698618988231,
          "rotation": 0,
          "target": "7-CORRIDOR 3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-MASTER BEDROOM",
      "name": "9-MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0443986239699914,
          "pitch": 0.3321228598155468,
          "rotation": 0,
          "target": "7-CORRIDOR 3"
        },
        {
          "yaw": 1.4584974754449274,
          "pitch": 0.14089621127174823,
          "rotation": 0,
          "target": "10-MASTER BATHROOM"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-MASTER BATHROOM",
      "name": "10-MASTER BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6369480756563366,
          "pitch": 0.28191533564714,
          "rotation": 0,
          "target": "9-MASTER BEDROOM"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-CORRIDOR 4",
      "name": "11-CORRIDOR 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21058237762012766,
          "pitch": 0.24471414706879813,
          "rotation": 0,
          "target": "13-CORRIDOR 6"
        },
        {
          "yaw": -1.6488593764970325,
          "pitch": -0.24819768637063433,
          "rotation": 0,
          "target": "4-CORRIDOR"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-CORRIDOR 5",
      "name": "12-CORRIDOR 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6084885120690657,
          "pitch": 0.29897308372515674,
          "rotation": 0,
          "target": "15-ROOM"
        },
        {
          "yaw": -2.7637855299729797,
          "pitch": 0.41202858347938687,
          "rotation": 0,
          "target": "16-BEDROOM 4"
        },
        {
          "yaw": 2.2107965216767997,
          "pitch": 0.3123172382020556,
          "rotation": 0,
          "target": "14-BATHROOM 2"
        },
        {
          "yaw": -1.4796585654768961,
          "pitch": 0.551551655738189,
          "rotation": 0,
          "target": "13-CORRIDOR 6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-CORRIDOR 6",
      "name": "13-CORRIDOR 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9413164791513076,
          "pitch": 0.48585746284006603,
          "rotation": 0,
          "target": "12-CORRIDOR 5"
        },
        {
          "yaw": 1.1885398340264786,
          "pitch": 0.37066381949341043,
          "rotation": 0,
          "target": "11-CORRIDOR 4"
        },
        {
          "yaw": 0.5568519079794019,
          "pitch": 0.17880877673794515,
          "rotation": 0,
          "target": "17-GARAGE"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-BATHROOM 2",
      "name": "14-BATHROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7567917086001117,
          "pitch": 0.23618508721236253,
          "rotation": 0,
          "target": "16-BEDROOM 4"
        },
        {
          "yaw": 1.6544612602299908,
          "pitch": 0.2925804135912138,
          "rotation": 0,
          "target": "12-CORRIDOR 5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ROOM",
      "name": "15-ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9402831086404753,
          "pitch": 0.4037513475551311,
          "rotation": 0,
          "target": "12-CORRIDOR 5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-BEDROOM 4",
      "name": "16-BEDROOM 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6332361693250697,
          "pitch": 0.3135725155833242,
          "rotation": 0,
          "target": "14-BATHROOM 2"
        },
        {
          "yaw": 2.7986508722105157,
          "pitch": 0.3714982888704128,
          "rotation": 0,
          "target": "12-CORRIDOR 5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-GARAGE",
      "name": "17-GARAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.741398791776037,
          "pitch": 0.18781492932642152,
          "rotation": 0,
          "target": "13-CORRIDOR 6"
        },
        {
          "yaw": 0.21847298386335012,
          "pitch": 0.06286230405963877,
          "rotation": 0,
          "target": "18-LOWER EXTERIOR"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-LOWER EXTERIOR",
      "name": "18-LOWER EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00883676485544882,
          "pitch": 0.04415451057301034,
          "rotation": 0,
          "target": "17-GARAGE"
        },
        {
          "yaw": 0.3449990363674118,
          "pitch": -0.28068616984741723,
          "rotation": 0,
          "target": "1-EXTERIOR DECK"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
