'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8539cebb69f11d699323905558eb7f1a",
".git/config": "1a5854373fbcd46ea84035d3a5f9e83f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dfa42ec463a3c612015d16c77a66ad83",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9255ae9c25cc746ac9a4986363ae1c53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f2bc3cfa10304f4dacf0e9693245cb3",
".git/logs/refs/heads/main": "3f2bc3cfa10304f4dacf0e9693245cb3",
".git/logs/refs/remotes/origin/HEAD": "5bf8d566e54ebd55920ea89366aa263d",
".git/logs/refs/remotes/origin/main": "727659e349d8246a47dd29eb25842938",
".git/objects/00/b5e47c0440b107574471ac3de92ea8b90b4306": "2bced372047d453d98cd3f55f8fbbc69",
".git/objects/03/78aec1455560d32fb9ce895a351a57770de1cd": "81b9cb3cab27ed60d9c9bdb036f03f37",
".git/objects/04/33705c007772dcf0c44460e53add2266f12e72": "7a36a8e5df5624453cb11048856ce99d",
".git/objects/04/c56b2a3c6b4ac32aaf3e53ea84a6d753e91565": "3f746684871c3491455a9bcc6b34c311",
".git/objects/07/0857009fe495243d97c3a7625165ec8ce9a315": "28ab7934aaaa6ae64a1c584482ef8770",
".git/objects/09/48bda23e4e6728f5da496428d4b683005854b0": "d01f1147978c587838c830413fe9bd15",
".git/objects/0a/5568b3eb72786b7d025f317905c26d9b2a59ce": "a014524865f890b626de14198770894c",
".git/objects/0a/ccd82cc7b9ad443ce511218e116a6f3d2d25c0": "96b50ea8b2854c76e10da8eb2c1d92e3",
".git/objects/15/c3b4187edeb807e081dc2027851ae09037f77a": "faf1c574c102504deeda748d560ffc82",
".git/objects/1a/1fa0a1d3b7efa0e03297d9f3ab82db76acc8bc": "3b074a60ce43d8742c8d188503c1ab6b",
".git/objects/1a/dd775d1db1b8fe101dc56e49d02d5698c7c351": "127b5cbc88c1a613c10fc0ab98d90961",
".git/objects/1b/915bca56e6a0a795ddef75b89ee1cde2da7f8c": "6c6f3398cee433d4815f8202249c8e1c",
".git/objects/22/e759b9e455eeae0a57215899f90cdf67b885a5": "ac5605cbb6e656ffab7a59d6207bf09d",
".git/objects/23/50b9d57d9f069f4785724715d473bee5a8f4ca": "0b099c1515b1ba02b93a6fa816c19b61",
".git/objects/23/d09452238c9617ca27b9131d842175e37a9aad": "704cecfd5d0246c86e378e46a8abdfc1",
".git/objects/28/d161e501c978921dc58b37148a0488bd7dde75": "a79439f174fd93ad2fdaa4c7a77f1298",
".git/objects/2c/63cbb158adf79b4d539ad05120fa0b58b5bb37": "615e41f616aaf38f4dd6e10be927903d",
".git/objects/30/65f6bcde252180c0befea041338a30e56096f1": "3f5da4458e842cb0c22663cd7a13619d",
".git/objects/31/6b4795b0bb21ea74aaddadf38054ddc20a7a02": "92974eae2c8b8b727b85118d125dbb26",
".git/objects/32/b8a14279cddad6c1f1883cf2e0852386ac5a13": "726ef33aac1b4038dcf883067eee5993",
".git/objects/33/f74d2a748e54e0a8df1b3e344f4fe61b2d010c": "6805a92038080dcf53729faf2e292a47",
".git/objects/34/4d884309e1bc4948557baea6f7e47a6c119610": "a302a877a74e03caca0b35c4ad8e324a",
".git/objects/35/4bf68f2897d2f8ad668391a3f14afddfdb47f0": "4ce36015e9e05f0d65c7d08e75988150",
".git/objects/36/a588ac5afc221813e559227ec3df72159aff14": "3c5fe509b60f724ba0ea2c1dc63cc52d",
".git/objects/3c/d3cac24ef5975bb4f603e8c8e96f2290ddbe1b": "c6294c35ed9fcd87f448a65057852de4",
".git/objects/3f/ed2972aaa06e37ca3ec1d1aa78dc1abdebbf56": "9bb75f1a5d13255bd23df044bd7aa952",
".git/objects/40/831d4f608ca34fa58b45a3d2226079f36f9f02": "6c679681558fa63e3f3e5e3458df9f4d",
".git/objects/46/581eac3e189ec8bdc07583227de3294bb2ca2e": "ea2ba9d92041462a6ca5e539e0e2a75f",
".git/objects/46/c299520f9ef6da7c73646578fc6b838990f712": "1068faa1978cc7cafc6c56d7aabce122",
".git/objects/47/5ce1d3ba8475364eb97282fdcfb0a2f985769a": "2943bf84bdd7a3a4c93990fe736a8fba",
".git/objects/49/93448e584f3e82b26ded6a7b12799e7629edf2": "319306e4f14442be02f1853f99df00c5",
".git/objects/4d/e59fb1db54d7df02d18dcd9c4b3b0f2ef10bf7": "33297d4c3281bb468399d0bc961a96f9",
".git/objects/4e/9bd366cdbcf9e95f5621b791727691c9c75d08": "1ec359ef2e51aaa4d2c75ea155ff0b6c",
".git/objects/52/68346478bc94846e29332acf12936e78450e56": "a67946e1abb8e0248e764bb1519353ab",
".git/objects/57/cc7bd1278a82ef0aa26745e1f2fa3ffbc316fa": "a17be52b2e06789e17ac8ea602cc3fb1",
".git/objects/59/dc9b51eeaff95070ba43357f7a2ae6464ec766": "aa3be0625ff6b8576a2b664afaa9d7f8",
".git/objects/5a/840156c02b1966996751654fe1448dfb5bf2af": "5d0b1182b491fe0c45d7b57381d9da0d",
".git/objects/5d/0e837ead07e68ccc69a29581cfa634c2670c37": "c7dec0463258a32a9851abbe30313580",
".git/objects/5f/c750692252a8e9526a1381651afb25cdf53d6c": "c3dd718409d5884ff157e96c6061e1f7",
".git/objects/63/071288dc910bdade8bfc0d36d7cfb9dddcded5": "0ff8c85776aafe811d94dac5712bf6df",
".git/objects/64/620d989c3807d7474c0ef99c7cefa43edddd27": "e43825a352b056e7ff5cbed4fa748aa6",
".git/objects/65/f0623bd1238062c0b1b863537777cc7acc088e": "5843a6a0454c2466b78da6769c350696",
".git/objects/67/c4b0ded2faa1df1034ff0b3ab63ae66c276227": "85020474aad678c9fd1270b781c0fc38",
".git/objects/67/c75cca8bb4ef929225ee5d98071f39911aea39": "f32775b5bb55ea376e1121b5dd4eb448",
".git/objects/67/db0b812ae930c1208c367fd3fde9a7ffce119a": "e5392a7f1f7e4e62c3cf7988c809213b",
".git/objects/68/9d5533a11d629b90115722bddcdaca970283a8": "efa8a4c22cab3d49085aac2514013533",
".git/objects/68/d2717ddc32949587c2c96b349ed784289b0809": "8ecdf81c4e67a9fb067ce02165a6780c",
".git/objects/6c/6b083471bf97b49e9d89c4ee109f218c1328aa": "ded738e16d3388eb6ddd35470c4ef489",
".git/objects/6c/ae0bc091de96c1b4667fa82f43dec64cbfe384": "8b28fbbc2ff291abe2b03aa4d5d2ca08",
".git/objects/6d/917dc0768c52d690a9549dbfd6d77338f7bf66": "0a5861c941e490d493716562ca0e9972",
".git/objects/6f/dbbdfce0087f16e53c1a93e8860b9f70c890e3": "f045f4b9e981e2d203432e73c104ce17",
".git/objects/70/821b91432a975fb0183b00a7a2c79d02d1c9eb": "0dc4cd0b78de939433ca60d9a9b2da01",
".git/objects/74/c40daff0917deaa59f2c7231ae41f05708295b": "66f0c82e514663fdc1908024cdb421aa",
".git/objects/76/3da6baf9db263d859a3e364d4b60b901f28438": "43ee93ab63bc4ba281d5c2e0f37b58f7",
".git/objects/77/19d2f78b475dda75d51c58bd5431edbaf2f4a8": "6a0bd250f6aee73f0ce759a849f9f3e1",
".git/objects/77/7dfc5fb2f1ac1eb506e3e0c04d3266c581bdfe": "88bcb37a5bfa222f2262a443e4382d99",
".git/objects/78/2836a92d067c76ad161cc96d3bd5979b150a31": "7fe9ba80ac46a0a7ee44a6ba8c3b1427",
".git/objects/7a/3964345dbfeaa9051ec15de1d98ad9e902204d": "02cd9fdbc7caaf91bc74897132bb431b",
".git/objects/7d/4ed73b080a194cb03568cefac5f72f402c6191": "6b4a832299ac5475455a7b503afc42b0",
".git/objects/7e/e3aef25fc148246713b2cc448c77cf9c13385c": "7618844ed090867bf7c2ed1ff0dca958",
".git/objects/7f/4ea9867bcd5920eb0cd49e25eda6b6b9d4c018": "ae523d0f10a98973c02aa9b3c54a8c86",
".git/objects/7f/cc1e2e0954392cef702643e2b697c93c608fea": "4d006df128011a4d6a25f41ff62acc28",
".git/objects/7f/e8140ec69bdee15960ae4ee5240230b33723a7": "fc02a3d54abcf176fc8796a963e4ebf4",
".git/objects/80/9c9cff1dc32fe3313c9ec7f21cb9c78f9a6590": "114ebc0241d436266b891e6f435a33e9",
".git/objects/87/d73843a6dfe28765f9bd867008389047b69af9": "cbd4d336b9bf58713121e0bf0c412161",
".git/objects/8a/7a38093aba140cef84c01b8bbf4f945f52e00c": "89054e4b523adcd277b33e1a24b50e14",
".git/objects/8a/ce1b2ae75b7f187e59d2a7fc8cc59794ccb3c9": "0e6b88dfda6fc4cd4fd3493c4d212e09",
".git/objects/8d/77506c41d3a4a8d9519f893d0a131e4134f449": "5eda6759c917d576ab43bb6caecbd8bf",
".git/objects/8f/c0c4bbd2a816e2ad909cff5a63d82e0dd4950a": "e095968ea2121b75d0a267af75c37ae4",
".git/objects/90/440971fc760da360b35a70ba3d78ff4a9012c0": "564d0511fd519f4ea3c8b60f308dae1c",
".git/objects/92/3589528fdc06829b7804ceaa7746aba375fd3f": "d718501a9b77351135f5c688e646bbbc",
".git/objects/92/35d0d7a9a4492a6d43fa6fc0fdb9550aff0a8e": "5b804376168988ec9bbbf5380186791f",
".git/objects/94/c0c256a3b4af5e5f62a7eb1a22d475402b0d73": "887520fb190b471561bbb3adcaba4529",
".git/objects/96/51b0846757e8a6e33bf303784b2efa7ab5fc05": "43a30d1c7065c03b8a4499d04772ae38",
".git/objects/9a/2a0a51fe199a8d4e05ccff1e46bd328aab2631": "a3ea48c631e3c4299dd242f302a3e634",
".git/objects/9a/fd166749601f5569941fea8302accc9f1e2416": "62d5a2e8398bcb0c81959a629760cb2d",
".git/objects/9b/c518c38ff0f6d989961f8983abc2b997931568": "80f1485b5121f164203c23ba72790b85",
".git/objects/9e/56c80dc4640860d2b17cdeb855b8e93af5a8fd": "839d0f00ae55b0eaf46bfbdcdcb06ff1",
".git/objects/a0/b2bd99a3e7f962c681cdb2242b6f8aa2d5984f": "69f81978ef0449c9909025cd76435685",
".git/objects/a2/cd4ac53c95d0f51d8b2f8d504e9f95df32eb67": "2c7bdf4a8b2ceac01f2436328e7f5154",
".git/objects/a7/5efd070311082591f61e23b17b8627c39d24cc": "4a69ba282e5f12b098b1c8ddf95ac698",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ac/683278d8af0e6e37b4a683641b8af826752889": "56deda4e2e37cbf486de9213f71e746a",
".git/objects/ac/def0c6d1def22959ebbfc4d4f7f1e1c6347e2a": "d2b217793022b029c34706a1f0a003a7",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/9fc0a2da7d9043e140d84a4029b3d26a6190ab": "86a3a9751f7ba0e4ed5eb1bc0ec7561c",
".git/objects/b1/c5abaa86fc8062161e1691491582ff97f491a8": "4db875b7b51bde6c79fdc2aed788222e",
".git/objects/b3/d4c3fd85e0cd74d12288838d4911c62da691f9": "1631a3006ad178a08011087fbe4dd88d",
".git/objects/b5/b4c633ba101d1f17c5b8391392a419c0854297": "bc8c3e680d7b00a8be0e683557e9ec35",
".git/objects/b5/d202aefb0199b3a8fdd8cfc5d1dc4ae8d4b9cc": "37eb06eea1cdb686075c9be075be4580",
".git/objects/b7/c441039e6ccec3f550000b619d080f61b7dac7": "c442d3ce0c00cf4a965d615a5617d436",
".git/objects/b9/6079da492510d6cc1f1a34e20195bf83d012cb": "e7433767c7b556d09d300f7b07d22b4c",
".git/objects/ba/087aacbef81826914e5a7d848d673e8fe71c3b": "87c6a87c18f6a902511387a91efeabd3",
".git/objects/ba/9922652b07cc31661fc2b29e6bf18b834af35d": "26365e43f80cc33af90236b7f6790c16",
".git/objects/bc/4e0ef85323230366f6992cadf8b35d6522e9ec": "1cc6e4fb493a71a79092a5d9ecea04b8",
".git/objects/bd/a6217b2b73f4d742afc4d532eb2229ed4179e1": "98d7abda1453d55a8efa67ae52436c83",
".git/objects/bd/b9f07845377d85dab617a90792a2194e655ab1": "67d512c4f445a5d831d07ea358bdb0fa",
".git/objects/bd/de51b2e82b022528067287b1b26136764fdd6b": "b4490229f408772bbd31e2eb93b59d8c",
".git/objects/c2/2e4ed276a067e615de87bd640f7930ea0a04d4": "b2eb2f1611b20de25429f9b853336df5",
".git/objects/c4/af1bc60aa778dc71b100541f3088c2369eafb1": "afcc1234b883894ce9af128e7e122920",
".git/objects/c7/5894d393c5c0520bb5047f561b7d52a3cf22f7": "497c708fbd63f418f6c6e0a8d7a64681",
".git/objects/cb/96b160f18febb50cfeed2dc3a221f6ec79c6b5": "5f1adc475fab6a761ef47e3c3236084c",
".git/objects/cc/f856fd1e8591401e1b72529374af69c027023b": "b85fda06fbfdf5a655fc6352d9788163",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/0de5932fd7a227ef7f6e4705d44f539d266cd4": "1746b3451b48e49ffb5ebe1a3bf73051",
".git/objects/d0/fa76cace8be26bd01ba80d10df14f28bd5a5ea": "f3612cba5a51e26512fefaea79b5d75f",
".git/objects/d9/617ef5b147226085c37f04dc65740749787211": "a8c1c813ce7370b40e72d60a2b6fc6e9",
".git/objects/dc/f60c5270ca5ff61ba47224dc9b2d2db293e199": "0c80ae288c47e844919c149ca7e7c7b0",
".git/objects/dd/4a77ccfe100a0aaf1337f3c7019c9948b5eb42": "e9a881ecebb657c666b0c986477f2d9d",
".git/objects/dd/82be6baf5a690e30f31713fd0df9e1fe2a1a4d": "d0d6312f5be45f4a7fe21cf78aa72d75",
".git/objects/de/4351603dd57a92cb147b3709b92f044677d097": "8e660c25844caa4f706b47f72650bdd9",
".git/objects/e0/7cc00694e947478185384b998205902eb7b7db": "2ce3a742e6ff37a84b3e7c3e856033cf",
".git/objects/e0/9ff8bd89f830517487f556fef84a4f3a270157": "467f5897b8227126f3c53198dd8baf48",
".git/objects/e1/1ee569dad199740d5ee02eb738711b77fd6122": "dfd278ed59eb862731af987ec8503815",
".git/objects/e3/837c061e248b83f95be117325e0bfe9e8070b6": "fa3b236ccdf6d3c362b9866291cc57a9",
".git/objects/e3/cccc6f86be7121295138978d60522c57b212ad": "a893b8091c7da01ecc128226b89f061b",
".git/objects/e4/e86892b6d556d5cbee05f940b23278349e5063": "52441f8ee55f983f07284861d85f6b5e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/1c51bd0120e69f41f6e54471df18a3d1965049": "48169077177eb8b94e5bde823b3da480",
".git/objects/e8/7db8d568d3122f0a1a3037b4fffd48f18ca6a0": "36bfb35cb9fb333d1807529d6ed7fb38",
".git/objects/eb/555e3e54661385fb53505c4068d3ef8bbf0d44": "4c7397c07a76e98d259e862f90e901ff",
".git/objects/ed/960be50e32e673d25b6a611c8eea670361c554": "7158df44842851137f32d69f7d5e6d7b",
".git/objects/ee/9763c72c4f9dd839d9bf43faee344ee1c218bc": "dcf5821d0c84fd502af6d9206c701e8f",
".git/objects/f0/98ffaa539c0a2aebf70d86c7171859aa48e9af": "5054bff66e275d032e52ac1bd3edd451",
".git/objects/f7/ed2af5cfa21f9146db19e1dfdbb3b7846752d6": "60a154aaed10d6268f69268eac34d20c",
".git/objects/f8/15f31c73c8d6b8a580940c77bd4ec6b230afdc": "35bad9432004947c7b38f8941fac02e9",
".git/objects/f8/dde90ecc7010c7b44bd41cd0a21ec0a49158ea": "4525c65d96a9dcfdf663308744ee9612",
".git/objects/fe/9501379c9b40a6d7bd7300f07fe229b46568ac": "4107ff57523fc88bd88d4bbc6336949d",
".git/objects/ff/1b461d25160901107b09d43e34db983ff8e3e6": "a32bbd50d7220abde50c50583f4b8583",
".git/objects/ff/32e8afad22b27f8fc5fc8e0b04df10ec53a26f": "a240c238fc07174f1e9e88f8139bbb2d",
".git/objects/ff/da5d1c2f00cfd46f6bad95c020a671c824a523": "7aab0eddf02ee2d5b25ca89afc704dec",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.idx": "940763dde6203afc5e0b9d9f1c929c18",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.pack": "abd12af8f2bb7d81e06e3c55112de39a",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.rev": "ee6b98ca0fba9c982fda1f14f72561f8",
".git/objects/pack/pack-3c331e01bd2c5a7b3d4d39ca6e7926cc953435ba.idx": "743ff9b4f988ccb9bf6fffcde1353ba5",
".git/objects/pack/pack-3c331e01bd2c5a7b3d4d39ca6e7926cc953435ba.pack": "4195253a64c60b1c8b3620647e153f63",
".git/objects/pack/pack-3c331e01bd2c5a7b3d4d39ca6e7926cc953435ba.rev": "0b15eef640cb07de5970112f71b1d8b8",
".git/ORIG_HEAD": "01bfc9d31df492f5a53fe3a1b70b7636",
".git/packed-refs": "409da83ce02f44bfb524da66cf5fcaa4",
".git/refs/heads/main": "01bfc9d31df492f5a53fe3a1b70b7636",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "01bfc9d31df492f5a53fe3a1b70b7636",
"assets/AssetManifest.bin": "d5961c1fdd4001a65c25262ce77a300b",
"assets/AssetManifest.bin.json": "6ab0ec1ac150977337c50e12aa14f9e2",
"assets/assets/icons/asr.svg": "ac5e58f3f9b5f2df554ebcc488c1cd28",
"assets/assets/icons/dhuhr.svg": "88adf654e47b3fcfe6030bb18d590cf5",
"assets/assets/icons/fajr.svg": "5cb514d888fe9252f41cbb1703c2fd1c",
"assets/assets/icons/isha.svg": "b411c985201a6545463fafa0fe950017",
"assets/assets/icons/magrib.svg": "15808cdfdc3819a56296401999551c81",
"assets/assets/icons/sunrise.svg": "37cd7df013550ff1cb0d052fa4ab75cd",
"assets/assets/images/android-chrome-192x192.png": "89fbdce5a4f7f363b02e0b4cb2a2f1ac",
"assets/assets/images/android-chrome-512x512.png": "779454857457b19db21f43b2ee5286c5",
"assets/assets/images/apple-touch-icon.png": "8d9dc18d17a5ddd0dc59b4fb11b5b09f",
"assets/assets/images/favicon-16x16.png": "59059352706da0ee96652b8b09c49a5c",
"assets/assets/images/favicon-32x32.png": "9e91b71c20fc6c38a60a9711de3a58c7",
"assets/assets/images/favicon.ico": "a8fb903738c32695c4d5b96514ee5518",
"assets/assets/images/logo-transparent.png": "328597033665b75814287805d5f64588",
"assets/assets/images/logo.png": "095167745acd2dc3fefe5d9c363dbcc1",
"assets/assets/images/old-social_preview_1200x630.png": "cdcc7f1d11081a4fbba7cc684bdeeb4d",
"assets/assets/images/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/assets/images/social_preview.png": "4644aa4b179ec9cfd866e8adba2b55b7",
"assets/assets/images/social_preview_1200x630.png": "8d76b7dc71a6007e00c202bf005b3cbb",
"assets/assets/images/splash_logo.png": "00d43830401974dbb0fb998141bc19b8",
"assets/assets/images/widget-home.png": "0791c83b65a423e14805235c68c3ef6f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9503b204f8a2bb517c1c8d183ff914e8",
"assets/NOTICES": "039b151b59083e592d0608f96991910e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "a8fb903738c32695c4d5b96514ee5518",
"favicon.png": "704d4411c55fd6ca1005175e87af6770",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2ff058f7c143d04e6251f1936bef0521",
"icons/Icon-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"icons/Icon-maskable-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-maskable-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"index.html": "b4e1b587b48226cedb57e050ea59bb39",
"/": "b4e1b587b48226cedb57e050ea59bb39",
"main.dart.js": "ed08e021e4b75fe35ba7e09b97f9232b",
"manifest.json": "32eb063b782be684e66d27d77f0bb9e0",
"service_worker_loader.js": "1e24a88d6c02aa2f4a4a6d5730c639ac",
"social_preview_1200x630.png": "8d76b7dc71a6007e00c202bf005b3cbb",
"splash/img/dark-1x.png": "891d94a6e8dde25956b950f09f177273",
"splash/img/dark-2x.png": "9ddaab541e94f6e7304f2cfecd1d7fa9",
"splash/img/dark-3x.png": "bc78bfca0e91aff207be7f3fddac423c",
"splash/img/dark-4x.png": "33754078a1ad5a2a434ba9cffcca6361",
"splash/img/light-1x.png": "891d94a6e8dde25956b950f09f177273",
"splash/img/light-2x.png": "9ddaab541e94f6e7304f2cfecd1d7fa9",
"splash/img/light-3x.png": "bc78bfca0e91aff207be7f3fddac423c",
"splash/img/light-4x.png": "33754078a1ad5a2a434ba9cffcca6361",
"test_cache.html": "ae948e017532512e61ebc37fadd2d4b9",
"version.json": "18a914d7232417ef72b7c669ab8581f8",
"_headers": "7628b4241e03694ef74cec9d85a3058b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
