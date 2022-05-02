exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 1190:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jQ": function() { return /* binding */ getTopPlayers; },
  "x4": function() { return /* binding */ login; },
  "ex": function() { return /* binding */ updatePreferences; },
  "Vs": function() { return /* binding */ updateScore; }
});

// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(6552);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(7548);
;// CONCATENATED MODULE: ./utils/mongodb.js

const {
  MONGODB_URI,
  MONGODB_DB
} = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 */


let cached = global.mongo;

if (!cached) {
  cached = global.mongo = {};
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const conn = {};
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = external_mongodb_.MongoClient.connect(MONGODB_URI, opts).then(client => {
      conn.client = client;
      return client.db(MONGODB_DB);
    }).then(db => {
      conn.db = db;
      cached.conn = conn;
    });
  }

  await cached.promise;
  return cached.conn;
}
// EXTERNAL MODULE: ./utils/errors.ts
var errors = __webpack_require__(1470);
;// CONCATENATED MODULE: ./lib/player.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TOP = 10;
const getTopPlayers = async () => {
  const {
    db
  } = await connectToDatabase();
  return await db.collection('players').find().limit(TOP).sort({
    ['statistics.points']: -1
  }).toArray();
};
const login = async (name, password) => {
  const {
    db
  } = await connectToDatabase();

  if (!process.env.JWT_SECRET) {
    throw new Error(errors/* default.SECRET_NOT_DEFINED.message */.Z.SECRET_NOT_DEFINED.message);
  }

  const savedUser = await db.collection('players').findOne({
    name
  });

  if (!savedUser) {
    // Register
    const hashed = await external_bcrypt_default().hash(password, 12);

    if (hashed) {
      const player = {
        name,
        password: hashed,
        statistics: {
          points: 0,
          questionsAnswered: 0
        },
        preferences: {
          numQuestions: 3,
          gender: ''
        }
      };
      await db.collection('players').insertOne(player);
      const token = external_jsonwebtoken_default().sign({
        _id: player.name
      }, process.env.JWT_SECRET);
      return {
        player: _objectSpread(_objectSpread({}, player), {}, {
          password: null
        }),
        token
      };
    }
  }

  const doMatch = await external_bcrypt_default().compare(password, savedUser.password);

  if (doMatch) {
    const token = external_jsonwebtoken_default().sign({
      _id: savedUser.name
    }, process.env.JWT_SECRET); // Remove password

    const {
      _id,
      name,
      statistics,
      preferences
    } = savedUser;
    return {
      token,
      player: {
        _id,
        name,
        statistics,
        preferences
      }
    };
  }

  throw new Error(errors/* default.USER_NOT_FOUND.message */.Z.USER_NOT_FOUND.message);
};
const updatePreferences = async (name, numQuestions, gender) => {
  const {
    db
  } = await connectToDatabase();
  const savedPlayer = await db.collection('players').findOne({
    name
  });
  const preferences = {
    numQuestions,
    gender
  };
  await db.collection('players').updateOne({
    name
  }, {
    $set: {
      preferences
    }
  });
  return _objectSpread(_objectSpread({}, savedPlayer), {}, {
    preferences
  });
};
const updateScore = async (name, points, questions) => {
  var _savedPlayer$statisti, _savedPlayer$statisti2;

  const {
    db
  } = await connectToDatabase();
  const savedPlayer = await db.collection('players').findOne({
    name
  });
  const statistics = {
    points: (savedPlayer === null || savedPlayer === void 0 ? void 0 : (_savedPlayer$statisti = savedPlayer.statistics) === null || _savedPlayer$statisti === void 0 ? void 0 : _savedPlayer$statisti.points) + parseInt(points, 10),
    questionsAnswered: (savedPlayer === null || savedPlayer === void 0 ? void 0 : (_savedPlayer$statisti2 = savedPlayer.statistics) === null || _savedPlayer$statisti2 === void 0 ? void 0 : _savedPlayer$statisti2.questionsAnswered) + parseInt(questions, 10)
  };
  await db.collection('players').updateOne({
    name
  }, {
    $set: {
      statistics
    }
  });
  return _objectSpread(_objectSpread({}, savedPlayer), {}, {
    statistics
  });
};

/***/ }),

/***/ 1470:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({
  ALREADY_REGISTERED: {
    errorCode: 100,
    message: 'Player already registered'
  },
  LOGIN_FORM_DATA_MISSING: {
    errorCode: 101,
    message: 'Please add email or password'
  },
  REGISTER_FORM_DATA_MISSING: {
    errorCode: 102,
    message: 'Please add name, email or password'
  },
  USER_NOT_FOUND: {
    errorCode: 103,
    message: 'Invalid email or password'
  },
  SECRET_NOT_DEFINED: {
    errorCode: 104,
    message: 'Secret for token is not defined'
  },
  INVALID_NAME: {
    errorCode: 105,
    message: 'Invalid name'
  },
  ERROR_REGISTERING: {
    errorCode: 106,
    message: 'Error registering Player'
  },
  USER_LIST_ERROR: {
    errorCode: 107,
    message: 'Error retrieving Users'
  },
  UPDATE_USER_PREFERENCES: {
    errorCode: 108,
    message: 'Error updating player preferences'
  },
  GET_USER_PREFERENCES: {
    errorCode: 109,
    message: 'Error retrieving player preferences'
  }
});

/***/ })

};
;