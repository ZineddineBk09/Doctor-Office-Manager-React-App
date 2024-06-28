import { getRandomDate } from "../utils";
import { Doctor, Patient, Appointment, Message, Chat } from "../interfaces";

const fakeDoctors: Doctor[] = [
  {
    id: "d1",
    email: "dr.smith@example.com",
    profile: {
      firstName: "Anna",
      lastName: "Smith",
      phone: "555-1234",
      address: "123 Health St, Wellville",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    specialty: "Cardiology",
    yearsOfExperience: 20,
    bio: "Experienced cardiologist with a passion for patient care.",
  },
  {
    id: "d2",
    email: "dr.jones@example.com",
    profile: {
      firstName: "John",
      lastName: "Jones",
      phone: "555-5678",
      address: "456 Healthy Ave, Fit City",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    specialty: "Neurology",
    yearsOfExperience: 25,
    bio: "Neurologist dedicated to treating disorders of the nervous system.",
  },
];

const fakePatients: Patient[] = [
  {
    id: "89e59de8-de3a-45b6-a825-d6106cd3f105",
    email: "bbrister0@independent.co.uk",
    profile: {
      firstName: "Boone",
      lastName: "Brister",
      phone: "716-722-2544",
      address: "8157 Vahlen Circle",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "2c42e98b-2699-4169-90dc-1c28a97ac2e6",
        condition: "Hypertension",
        dateDiagnosed: "8/14/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "db47b67d-c3f2-4a61-9061-d3761511c0db",
    email: "ctaylder1@census.gov",
    profile: {
      firstName: "Christy",
      lastName: "Taylder",
      phone: "913-661-7705",
      address: "293 Gale Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "437a8152-621e-482e-a8c4-04a2635056d1",
        condition: "Hypertension",
        dateDiagnosed: "7/17/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "f47c54aa-da7c-42f8-9163-a2b186f2d244",
    email: "dkellington2@washingtonpost.com",
    profile: {
      firstName: "Dalton",
      lastName: "Kellington",
      phone: "732-218-0544",
      address: "41664 Mallory Alley",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "2011e07e-2916-4012-affd-3a1c893f9da1",
        condition: "Hypertension",
        dateDiagnosed: "5/16/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "455b8720-1a96-4246-9ca0-7412ed355d2f",
    email: "kelden3@prlog.org",
    profile: {
      firstName: "Kearney",
      lastName: "Elden",
      phone: "253-754-8576",
      address: "9 Londonderry Hill",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "025ed263-9434-4c0c-b826-a07dc0de49ba",
        condition: "Hypertension",
        dateDiagnosed: "12/16/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "bdf227a4-d64e-474a-a560-5ee83e0d6af7",
    email: "hmonkton4@woothemes.com",
    profile: {
      firstName: "Hadleigh",
      lastName: "Monkton",
      phone: "951-817-0279",
      address: "78907 Holmberg Street",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "58865bd3-efb2-4cdc-8246-5b8365fa3581",
        condition: "Diabetes",
        dateDiagnosed: "3/5/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "5214e623-80d7-4064-9681-629004176bdc",
    email: "amcguinley5@shop-pro.jp",
    profile: {
      firstName: "Adamo",
      lastName: "McGuinley",
      phone: "534-733-8991",
      address: "0019 Ludington Alley",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "1d771b45-9c5e-4478-ac4d-3d8eb5434bcf",
        condition: "Diabetes",
        dateDiagnosed: "2/23/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "9b76a516-7dd4-461e-ac60-e88b83c4f0c6",
    email: "abasham6@independent.co.uk",
    profile: {
      firstName: "Ad",
      lastName: "Basham",
      phone: "733-263-8564",
      address: "91 Judy Road",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "ab5abb31-b9d2-4e25-82a1-d40334f945e0",
        condition: "Hypertension",
        dateDiagnosed: "2/16/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "b22cef86-33ef-4b49-92f4-40b96ffc7a82",
    email: "aattenbarrow7@cocolog-nifty.com",
    profile: {
      firstName: "Aguistin",
      lastName: "Attenbarrow",
      phone: "844-999-7818",
      address: "6055 Norway Maple Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "1acf6331-f8d9-40f7-9be0-7eb8bb620a45",
        condition: "Hypertension",
        dateDiagnosed: "9/4/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "11308bdb-abb2-4998-911c-2c65cb7cc7fc",
    email: "khaugen8@microsoft.com",
    profile: {
      firstName: "Krishna",
      lastName: "Haugen",
      phone: "502-361-2222",
      address: "135 Heath Trail",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "6ed7246b-7aac-4f0e-8334-9cea7c4b2912",
        condition: "Asthma",
        dateDiagnosed: "1/7/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "a082fe14-950a-4127-ac43-91cc11f907e8",
    email: "jswaysland9@deliciousdays.com",
    profile: {
      firstName: "Josephine",
      lastName: "Swaysland",
      phone: "710-989-8095",
      address: "1767 Morning Point",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "a86b38cc-ac46-4e0a-8398-128b08ffc756",
        condition: "Asthma",
        dateDiagnosed: "4/21/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "8c264d9f-e6bb-4248-a6b5-82b1e5083b59",
    email: "ashelmerdinea@google.fr",
    profile: {
      firstName: "Analise",
      lastName: "Shelmerdine",
      phone: "314-177-2325",
      address: "702 Graedel Junction",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "1de0cff5-78b9-4c22-9e0f-c9f007cc310f",
        condition: "Hypertension",
        dateDiagnosed: "12/5/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "38a7e6c5-7f9a-4070-85a1-ed877a8e4cc0",
    email: "dmccallb@zimbio.com",
    profile: {
      firstName: "Danya",
      lastName: "McCall",
      phone: "402-582-4633",
      address: "772 La Follette Center",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "6dbe3624-bded-4910-965e-7896c7fd478e",
        condition: "Asthma",
        dateDiagnosed: "10/2/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "93c8d9f9-972a-44ce-9751-b79c5df3345b",
    email: "aoatesc@sina.com.cn",
    profile: {
      firstName: "Audy",
      lastName: "Oates",
      phone: "583-720-0794",
      address: "19 Darwin Drive",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "0cb1abd3-ab55-40b6-b428-f83d7fad4b0f",
        condition: "Asthma",
        dateDiagnosed: "11/22/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "cb430366-edbc-42f8-932f-8e96cea54031",
    email: "aelsied@oakley.com",
    profile: {
      firstName: "Aundrea",
      lastName: "Elsie",
      phone: "657-689-9743",
      address: "3 Old Shore Hill",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "75087e52-ed1e-4d4f-b393-7884cc5b426b",
        condition: "Diabetes",
        dateDiagnosed: "5/29/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "8f3f1a5e-1350-4240-b47e-2bbf7f175f00",
    email: "cclearye@vinaora.com",
    profile: {
      firstName: "Corette",
      lastName: "Cleary",
      phone: "464-897-4808",
      address: "1991 Hansons Plaza",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "ff94ebb0-f6e7-45c4-82fc-1754f92d4286",
        condition: "Diabetes",
        dateDiagnosed: "7/2/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "ef5ed9e3-c7ac-4001-bad5-42c1ad009747",
    email: "msansomef@slashdot.org",
    profile: {
      firstName: "Mariya",
      lastName: "Sansome",
      phone: "726-279-7549",
      address: "357 Melody Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "fb9b89d0-a844-4c7a-8a27-a534514b2097",
        condition: "Hypertension",
        dateDiagnosed: "11/18/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "fe728534-aa39-451f-a0aa-ad4a609daf22",
    email: "gfeyerg@usnews.com",
    profile: {
      firstName: "Goldia",
      lastName: "Feyer",
      phone: "502-549-7471",
      address: "5898 Fallview Circle",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "e76c3c03-9bea-4683-87e0-790e02c33276",
        condition: "Diabetes",
        dateDiagnosed: "4/29/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "5e4495be-a01d-4bed-bbc1-a5f95b9f6286",
    email: "enialh@techcrunch.com",
    profile: {
      firstName: "Elli",
      lastName: "Nial",
      phone: "961-105-2379",
      address: "36435 Elka Drive",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "a91f3f06-85ba-4daa-9c27-4b7322e42bd2",
        condition: "Diabetes",
        dateDiagnosed: "11/25/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "4c83791d-21b2-4276-9488-920e4cea6279",
    email: "aschwerini@typepad.com",
    profile: {
      firstName: "Averell",
      lastName: "Schwerin",
      phone: "312-612-4341",
      address: "313 Marcy Lane",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "ed6c37d9-5805-405a-af8e-a5afac061355",
        condition: "Asthma",
        dateDiagnosed: "3/13/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "64f82c12-54a0-4212-8a13-61f92776fa2c",
    email: "zelflainj@ucsd.edu",
    profile: {
      firstName: "Zacharie",
      lastName: "Elflain",
      phone: "252-315-9356",
      address: "5 Anniversary Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "b7865d23-7ff0-4910-912f-2bae36545f60",
        condition: "Hypertension",
        dateDiagnosed: "4/19/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "d5245149-fb81-40cb-9e4b-861a86c37aea",
    email: "mmunktonk@reddit.com",
    profile: {
      firstName: "Mae",
      lastName: "Munkton",
      phone: "747-126-8481",
      address: "83027 Briar Crest Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "65686554-64ed-4c4d-9a2c-69738d926814",
        condition: "Hypertension",
        dateDiagnosed: "9/19/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "f0dc325b-9ed0-420e-99ee-b28de5ec6df2",
    email: "vliggettl@geocities.jp",
    profile: {
      firstName: "Verne",
      lastName: "Liggett",
      phone: "672-194-9217",
      address: "05 Dawn Junction",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "abe7856c-d07b-48a7-8bba-034c90507fef",
        condition: "Diabetes",
        dateDiagnosed: "4/1/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "859139c9-e220-4254-bd96-b39bc492c847",
    email: "lcallardm@t-online.de",
    profile: {
      firstName: "Lon",
      lastName: "Callard",
      phone: "285-334-4253",
      address: "35359 Fisk Way",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "ac1ad8d9-65bb-4b41-9e41-e344e35c2a6a",
        condition: "Diabetes",
        dateDiagnosed: "2/6/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "623dc5c1-d3d3-479a-a46d-4f0fcff31ca7",
    email: "dbarocn@tamu.edu",
    profile: {
      firstName: "Delores",
      lastName: "Baroc",
      phone: "437-840-5862",
      address: "24341 Loeprich Trail",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "6a7bc711-f7f0-47c9-96cd-9e497a4d0016",
        condition: "Hypertension",
        dateDiagnosed: "10/16/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "3516881f-5930-47f4-8397-2c78b3626fcd",
    email: "jsavatiero@hp.com",
    profile: {
      firstName: "Jaine",
      lastName: "Savatier",
      phone: "890-719-3883",
      address: "6825 Susan Place",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "8f5e4335-7aa3-442d-87df-943375d418e4",
        condition: "Diabetes",
        dateDiagnosed: "10/31/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "56561b85-30e7-4356-8559-2c8e513c34aa",
    email: "bbartosp@tinypic.com",
    profile: {
      firstName: "Bab",
      lastName: "Bartos",
      phone: "563-358-6043",
      address: "92 Maple Wood Place",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "f9e70e4c-54df-4a8a-b48f-33011a96160f",
        condition: "Diabetes",
        dateDiagnosed: "11/25/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "938414d8-3cbe-4d75-8c72-8ac536e5fe54",
    email: "gpidgeleyq@blinklist.com",
    profile: {
      firstName: "Gino",
      lastName: "Pidgeley",
      phone: "211-890-2923",
      address: "81839 Hollow Ridge Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "c708b419-e7e8-4439-8317-51382e4496c8",
        condition: "Diabetes",
        dateDiagnosed: "1/22/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "ab4e6987-4161-4fa1-8f41-3b778e6271fb",
    email: "mventrisr@hp.com",
    profile: {
      firstName: "Maura",
      lastName: "Ventris",
      phone: "387-324-0205",
      address: "5 Loftsgordon Place",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "274735fe-2ac2-4327-8695-e90c270c7a1d",
        condition: "Diabetes",
        dateDiagnosed: "2/27/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "497cda9c-785f-4c84-a813-ee2c99433488",
    email: "ssimonssons@psu.edu",
    profile: {
      firstName: "Selle",
      lastName: "Simonsson",
      phone: "813-750-6541",
      address: "4321 Sundown Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "e91a366e-21b5-4535-bd3a-3850eaaecb6f",
        condition: "Hypertension",
        dateDiagnosed: "1/5/2020",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "d1015dcd-8a65-4913-98bf-c783b494eba2",
    email: "bwetwoodt@state.tx.us",
    profile: {
      firstName: "Bennie",
      lastName: "Wetwood",
      phone: "347-506-6590",
      address: "9317 Warbler Parkway",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "2bc65cd7-5344-4f00-8b5c-b8a6eda493dd",
        condition: "Diabetes",
        dateDiagnosed: "12/10/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "db42e23c-ed63-4fba-8d34-5cd4094bb29e",
    email: "gmillandu@go.com",
    profile: {
      firstName: "Garrott",
      lastName: "Milland",
      phone: "708-933-0614",
      address: "59 Thierer Plaza",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "53d3682d-faa6-490a-b002-72f2f772f258",
        condition: "Diabetes",
        dateDiagnosed: "6/22/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "6f6ce69e-1e9c-4b93-b1b1-daa86bb14b41",
    email: "dbrooktonv@mediafire.com",
    profile: {
      firstName: "Demetri",
      lastName: "Brookton",
      phone: "510-372-8795",
      address: "5 Comanche Lane",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "2ae5c291-27d2-45c0-a86a-8f8bbbf01815",
        condition: "Asthma",
        dateDiagnosed: "2/8/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "ca2454e6-dfec-4f39-9ae3-a0721c8946e7",
    email: "pdolemanw@ask.com",
    profile: {
      firstName: "Prissie",
      lastName: "Doleman",
      phone: "818-949-9626",
      address: "2731 Boyd Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "06a082eb-c8ca-46d6-92f8-87bc1e0d4956",
        condition: "Asthma",
        dateDiagnosed: "8/25/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "c6d034fc-e7ab-406d-b42c-ef11ab9023ec",
    email: "lanthoinex@paginegialle.it",
    profile: {
      firstName: "Lilla",
      lastName: "Anthoine",
      phone: "994-530-3088",
      address: "24882 Meadow Ridge Center",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "2d9b7298-211a-4f4b-ab6f-60ad3a818600",
        condition: "Asthma",
        dateDiagnosed: "11/21/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "bc16a35c-e499-4423-831f-56a61fc1deb2",
    email: "spietraszeky@dailymail.co.uk",
    profile: {
      firstName: "Sholom",
      lastName: "Pietraszek",
      phone: "813-107-7262",
      address: "423 Jenifer Park",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "956e2a55-f926-4cc8-b035-78b82d53972c",
        condition: "Asthma",
        dateDiagnosed: "9/19/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "561166fe-a8c6-4359-83a6-33be4c6987bc",
    email: "wjirusz@rediff.com",
    profile: {
      firstName: "Wyatan",
      lastName: "Jirus",
      phone: "163-243-7601",
      address: "95835 Glacier Hill Lane",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "1712caa5-838c-4356-a37d-b44b1500d201",
        condition: "Asthma",
        dateDiagnosed: "9/13/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "4697c273-8d89-415b-9f37-b0b5c10daef2",
    email: "jshemwell10@answers.com",
    profile: {
      firstName: "Janeen",
      lastName: "Shemwell",
      phone: "126-956-3548",
      address: "327 David Lane",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "81c20daf-cbf1-404b-b7bc-b3e42d5d22fd",
        condition: "Hypertension",
        dateDiagnosed: "12/16/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "e98d5eeb-aae4-4089-ad54-44ecc233a96a",
    email: "rwillavoys11@answers.com",
    profile: {
      firstName: "Rudolf",
      lastName: "Willavoys",
      phone: "277-605-5682",
      address: "959 Sutherland Circle",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "1fa399be-ea93-4b05-86d4-56eb9c742811",
        condition: "Diabetes",
        dateDiagnosed: "12/16/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "09b088d0-9957-4f66-a194-85a090808ec4",
    email: "pbiddlecombe12@istockphoto.com",
    profile: {
      firstName: "Penelopa",
      lastName: "Biddlecombe",
      phone: "115-684-7206",
      address: "7 Sycamore Park",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "78349ea0-90b0-41a2-b6f0-12fea1edc369",
        condition: "Hypertension",
        dateDiagnosed: "10/25/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "bd3d6c87-a2f1-4f61-9edb-92547f5d39af",
    email: "efretter13@ihg.com",
    profile: {
      firstName: "Edd",
      lastName: "Fretter",
      phone: "901-884-5486",
      address: "730 Schlimgen Parkway",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "1acc04a7-ca80-4788-8ebd-08e3b905c8c4",
        condition: "Asthma",
        dateDiagnosed: "7/17/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "4116d566-21c9-486c-944f-5f2267d192ac",
    email: "ahothersall14@gnu.org",
    profile: {
      firstName: "Aguste",
      lastName: "Hothersall",
      phone: "972-237-8187",
      address: "1631 Truax Place",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "b97b845e-3688-4aa1-9cc3-94ae2c307d35",
        condition: "Asthma",
        dateDiagnosed: "11/13/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "0eec2118-edec-4de4-b10d-00ace8ea27fe",
    email: "mhumpherson15@kickstarter.com",
    profile: {
      firstName: "Marylee",
      lastName: "Humpherson",
      phone: "292-425-9527",
      address: "6805 Fair Oaks Plaza",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "92d01c15-f926-4101-b7f2-8addddfb657a",
        condition: "Hypertension",
        dateDiagnosed: "9/7/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "f207f292-cd22-4747-915a-716d2224a395",
    email: "roseman16@nasa.gov",
    profile: {
      firstName: "Rica",
      lastName: "Oseman",
      phone: "949-636-9000",
      address: "72 Packers Lane",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "4093ff05-fdc0-4201-872d-8feabe90cc84",
        condition: "Asthma",
        dateDiagnosed: "11/21/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "c0f6c480-2616-4dc9-bb2b-9ba62e49e8b7",
    email: "hfasler17@google.es",
    profile: {
      firstName: "Harriett",
      lastName: "Fasler",
      phone: "541-569-1193",
      address: "89 Fieldstone Lane",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "254755e5-8048-41fc-b855-e6ee6e323f4f",
        condition: "Asthma",
        dateDiagnosed: "12/29/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "51451dbb-e734-48da-a893-0a34ad2214a4",
    email: "caggio18@berkeley.edu",
    profile: {
      firstName: "Carena",
      lastName: "Aggio",
      phone: "271-920-6618",
      address: "0 Pennsylvania Avenue",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "30f78ca5-7c92-4dc7-8fc3-32d72f428acf",
        condition: "Diabetes",
        dateDiagnosed: "4/3/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "f0725ae5-6d74-41f8-ae1b-d4c2b051b010",
    email: "hboundley19@vinaora.com",
    profile: {
      firstName: "Hamnet",
      lastName: "Boundley",
      phone: "210-763-6179",
      address: "10 Bartillon Park",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "b04132df-9f98-4e8d-88dc-96f9fbbfbfed",
        condition: "Asthma",
        dateDiagnosed: "8/25/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "d5b2307b-8bce-4906-a556-d607fec601b8",
    email: "ewinship1a@samsung.com",
    profile: {
      firstName: "Emilia",
      lastName: "Winship",
      phone: "382-667-8148",
      address: "74412 High Crossing Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "dddd2ddd-49bb-46d5-be03-842637d8e49a",
        condition: "Diabetes",
        dateDiagnosed: "1/23/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "ece89be8-19ae-42e6-bf76-c68908f1ea4f",
    email: "tgallamore1b@state.gov",
    profile: {
      firstName: "Taylor",
      lastName: "Gallamore",
      phone: "737-256-4975",
      address: "222 International Hill",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "9167120b-9646-4c31-9307-6e7f35b73248",
        condition: "Diabetes",
        dateDiagnosed: "4/20/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "355994ec-65f7-425e-af96-c7436ac0751f",
    email: "epriddey1c@edublogs.org",
    profile: {
      firstName: "Erika",
      lastName: "Priddey",
      phone: "543-127-3292",
      address: "40 Kenwood Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "5c59cfbd-20d4-46b1-afcd-e4a859596825",
        condition: "Asthma",
        dateDiagnosed: "12/13/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "fc3bdcfd-f50a-4a95-beef-e5880ef7bb09",
    email: "eharlick1d@elpais.com",
    profile: {
      firstName: "Elisabetta",
      lastName: "Harlick",
      phone: "415-439-9992",
      address: "257 Brentwood Avenue",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "d9908c9c-d1ea-4c3b-987f-0aeb0f7c734d",
        condition: "Diabetes",
        dateDiagnosed: "7/10/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "efa9baa2-1b2f-4ec7-b744-308d2ba9d635",
    email: "ijozwiak1e@vkontakte.ru",
    profile: {
      firstName: "Isa",
      lastName: "Jozwiak",
      phone: "562-977-9439",
      address: "609 Gale Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "457eb2d9-d941-45a9-9e43-bc36071d124a",
        condition: "Hypertension",
        dateDiagnosed: "1/15/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "9e8603a7-428f-4c92-a8a7-0201c05249e0",
    email: "ksheaber1f@yellowbook.com",
    profile: {
      firstName: "Ken",
      lastName: "Sheaber",
      phone: "958-896-6770",
      address: "7098 Division Center",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "74fb9c75-cc84-4791-b6ce-05f49d5bdfed",
        condition: "Hypertension",
        dateDiagnosed: "3/25/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "a029d2a1-a453-4716-a113-9ded01ee589e",
    email: "gohickey1g@barnesandnoble.com",
    profile: {
      firstName: "Geri",
      lastName: "O'Hickey",
      phone: "139-408-1692",
      address: "02 West Drive",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "fa54a392-a51e-4530-be0f-cd07b5c80086",
        condition: "Diabetes",
        dateDiagnosed: "3/23/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "2366aa3d-b7be-40ad-b5a6-aa0a1f294def",
    email: "wapted1h@dell.com",
    profile: {
      firstName: "Wang",
      lastName: "Apted",
      phone: "952-141-4248",
      address: "30311 Crownhardt Plaza",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "e1fe0ea1-a180-4652-82e0-46b032878340",
        condition: "Hypertension",
        dateDiagnosed: "5/8/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "9f10b05c-ebd1-40a9-bcf3-03df72dc28f8",
    email: "ceggleson1i@webnode.com",
    profile: {
      firstName: "Christen",
      lastName: "Eggleson",
      phone: "584-881-7400",
      address: "8 Ridgeview Place",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "88cca06c-9922-425a-b097-d67fc0d80b76",
        condition: "Hypertension",
        dateDiagnosed: "12/2/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "0d576fcd-24d3-49af-9810-c7ce3318d797",
    email: "shavenhand1j@barnesandnoble.com",
    profile: {
      firstName: "Shane",
      lastName: "Havenhand",
      phone: "747-942-2866",
      address: "7 Warbler Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "d3e3346b-02f9-4944-9d54-6d13cae1d178",
        condition: "Diabetes",
        dateDiagnosed: "11/3/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "bd16609a-899a-4497-af06-335fe5871a98",
    email: "cbelliss1k@edublogs.org",
    profile: {
      firstName: "Cory",
      lastName: "Belliss",
      phone: "736-292-8903",
      address: "778 Mesta Hill",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "02603ca4-7168-4c06-9bb2-67a0956ba5ef",
        condition: "Hypertension",
        dateDiagnosed: "1/18/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "a0851261-3b29-4d1d-8146-78f36d1aeb74",
    email: "bmayfield1l@nps.gov",
    profile: {
      firstName: "Brendis",
      lastName: "Mayfield",
      phone: "367-985-0637",
      address: "4899 Dakota Court",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "88d94af5-1ef7-4ff8-b48c-1713ff66613f",
        condition: "Hypertension",
        dateDiagnosed: "12/14/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "c6c55873-3f88-41cf-ade6-700e99e7f0b5",
    email: "tlabbez1m@phpbb.com",
    profile: {
      firstName: "Tabitha",
      lastName: "Labbez",
      phone: "446-832-4654",
      address: "2172 Heath Point",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "a4238b3b-8511-4458-b459-05f73a5ff133",
        condition: "Hypertension",
        dateDiagnosed: "11/5/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "f2c067c4-026a-47e6-ad67-18c537df41be",
    email: "tmafham1n@ask.com",
    profile: {
      firstName: "Theo",
      lastName: "Mafham",
      phone: "776-994-7515",
      address: "3 Mariners Cove Lane",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "c0ab9699-5f3c-44bd-8d0b-d1cff775572e",
        condition: "Hypertension",
        dateDiagnosed: "8/22/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "5ec0daef-4f5c-4480-94e1-485ff08ef857",
    email: "rcairns1o@gnu.org",
    profile: {
      firstName: "Ragnar",
      lastName: "Cairns",
      phone: "243-626-0609",
      address: "13357 Towne Way",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "2c0597f8-f3f4-4e4c-855e-4bed2409349a",
        condition: "Diabetes",
        dateDiagnosed: "3/2/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "9267f065-c8ed-4ec0-8d7d-15f0bf59b618",
    email: "nshelp1p@theatlantic.com",
    profile: {
      firstName: "Nadiya",
      lastName: "Shelp",
      phone: "740-615-2663",
      address: "1066 Browning Alley",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "885901a8-5b03-498a-8cde-9738d0d48171",
        condition: "Diabetes",
        dateDiagnosed: "9/23/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "8384c79c-e5de-4f59-a7ab-8cf7b3882338",
    email: "jsommersett1q@usatoday.com",
    profile: {
      firstName: "Johnathon",
      lastName: "Sommersett",
      phone: "805-724-0912",
      address: "38038 Cottonwood Junction",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "0334e6bb-7972-4cac-8f39-153acbfebfeb",
        condition: "Asthma",
        dateDiagnosed: "10/22/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "8a72e1fd-770d-41ac-a2d2-bb9b82aabbce",
    email: "gadamski1r@fda.gov",
    profile: {
      firstName: "Gustavo",
      lastName: "Adamski",
      phone: "734-568-8531",
      address: "686 Vidon Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "12b6ad74-6be1-4bbe-86ce-6d882de500a2",
        condition: "Hypertension",
        dateDiagnosed: "6/27/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "b534217a-fe7d-498e-b374-5590014b8f0a",
    email: "vseckom1s@comcast.net",
    profile: {
      firstName: "Veradis",
      lastName: "Seckom",
      phone: "752-759-6102",
      address: "61 Namekagon Pass",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "1df49936-d787-41b1-b35e-121ccb8905ed",
        condition: "Hypertension",
        dateDiagnosed: "9/24/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "34bd9137-e6da-4969-8ca8-87111c90be5b",
    email: "sbernasek1t@irs.gov",
    profile: {
      firstName: "Shauna",
      lastName: "Bernasek",
      phone: "951-211-9698",
      address: "8 Tony Street",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "4582a10e-8aff-4089-8550-cc8337712423",
        condition: "Diabetes",
        dateDiagnosed: "5/20/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "77a9ec3b-919b-4112-b6db-239dc30eea96",
    email: "askelton1u@ft.com",
    profile: {
      firstName: "Averil",
      lastName: "Skelton",
      phone: "498-228-0125",
      address: "61602 Morningstar Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "ec9fc212-9148-4cd7-9384-dd6af469ca22",
        condition: "Hypertension",
        dateDiagnosed: "3/8/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "db489766-6332-4fd8-82f8-1bedd0c272b8",
    email: "mgroneway1v@hud.gov",
    profile: {
      firstName: "Matti",
      lastName: "Groneway",
      phone: "815-145-3776",
      address: "7 Florence Place",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "cb5dd73a-31a3-4997-a5b9-46096cadccaa",
        condition: "Asthma",
        dateDiagnosed: "2/21/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "00b84d9b-7663-42f5-ab45-8ba0bbc9494b",
    email: "tpoppy1w@flavors.me",
    profile: {
      firstName: "Tom",
      lastName: "Poppy",
      phone: "165-883-5667",
      address: "7951 Florence Lane",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "5ba7f8c6-7f85-413c-ab93-ce1adaba0af6",
        condition: "Diabetes",
        dateDiagnosed: "1/1/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "d33976d6-616c-469d-9d30-6dfad316a7ac",
    email: "ecaroline1x@ycombinator.com",
    profile: {
      firstName: "Elly",
      lastName: "Caroline",
      phone: "976-194-5042",
      address: "10346 Luster Hill",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "6a30e42d-14f6-424f-8e42-f033e522e583",
        condition: "Diabetes",
        dateDiagnosed: "2/12/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "86b8dfb2-2bec-45f3-a54b-c3d80fa0ad72",
    email: "celis1y@mashable.com",
    profile: {
      firstName: "Chlo",
      lastName: "Elis",
      phone: "631-713-2010",
      address: "9698 South Alley",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "53f98584-a75d-41fc-9592-48d9f95c5f36",
        condition: "Asthma",
        dateDiagnosed: "11/9/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "8132512f-0a09-4067-9bae-ac5f09f78a43",
    email: "bgiovannini1z@prlog.org",
    profile: {
      firstName: "Bryn",
      lastName: "Giovannini",
      phone: "707-681-3608",
      address: "6 Acker Place",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "a7448a92-5016-4adc-946f-4825cba4a027",
        condition: "Hypertension",
        dateDiagnosed: "3/21/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "28b13cc2-6016-449f-b533-bce75c4ea1a4",
    email: "shussell20@amazon.de",
    profile: {
      firstName: "Sky",
      lastName: "Hussell",
      phone: "308-525-7767",
      address: "988 Hovde Court",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "7ab221e6-9aef-443b-8aa2-17e602660d82",
        condition: "Asthma",
        dateDiagnosed: "6/16/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "16c91d3c-9640-4346-8930-61db919af05e",
    email: "cboman21@miitbeian.gov.cn",
    profile: {
      firstName: "Corbin",
      lastName: "Boman",
      phone: "651-292-2753",
      address: "12 Ryan Alley",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "0ddcfc32-8fad-44da-bba3-e8f08cac2aea",
        condition: "Diabetes",
        dateDiagnosed: "5/31/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "6556f754-3942-4618-8eb8-4a02616e6b87",
    email: "sjulyan22@hexun.com",
    profile: {
      firstName: "Skylar",
      lastName: "Julyan",
      phone: "569-195-7642",
      address: "77652 Florence Drive",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "31fa8d72-c106-4361-895d-c25f0508d643",
        condition: "Diabetes",
        dateDiagnosed: "9/23/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "c40ac3f1-4f51-4389-8a4c-73befc5f6257",
    email: "cveschi23@dailymail.co.uk",
    profile: {
      firstName: "Corette",
      lastName: "Veschi",
      phone: "557-574-8183",
      address: "13587 Hoepker Way",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "81cd6ed9-4630-4d6b-8389-a8a036a2f0cc",
        condition: "Asthma",
        dateDiagnosed: "4/2/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "4ab85652-eff3-4bfa-8788-1118fe8b1634",
    email: "lvonwelden24@de.vu",
    profile: {
      firstName: "Lawton",
      lastName: "Von Welden",
      phone: "541-541-3638",
      address: "98437 Bunting Crossing",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "0ad703cd-2685-486a-a4c6-d5ae2ef47adf",
        condition: "Hypertension",
        dateDiagnosed: "11/4/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "33306366-e0db-42f5-8e01-07981f945499",
    email: "agriniov25@mit.edu",
    profile: {
      firstName: "Antonella",
      lastName: "Griniov",
      phone: "777-341-5457",
      address: "769 Toban Center",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "6b36550c-e673-46c0-8329-c1254515eff8",
        condition: "Hypertension",
        dateDiagnosed: "12/17/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "c0f19056-7e41-4384-be18-79eb5fc9c847",
    email: "dknath26@parallels.com",
    profile: {
      firstName: "Dyann",
      lastName: "Knath",
      phone: "857-292-8534",
      address: "48 Reindahl Lane",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "2e5962c6-4d06-4f11-8a21-db767578155d",
        condition: "Diabetes",
        dateDiagnosed: "6/26/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "47a877c8-2ae5-4fd9-a1c9-66ee84f8fe87",
    email: "dboutcher27@zimbio.com",
    profile: {
      firstName: "Dorian",
      lastName: "Boutcher",
      phone: "934-377-5050",
      address: "98 Lillian Trail",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "0aa02eba-e32c-4adf-907b-b6e07a515755",
        condition: "Asthma",
        dateDiagnosed: "8/6/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "9de10112-f52e-457c-9300-0523b3806575",
    email: "lpatifield28@sitemeter.com",
    profile: {
      firstName: "Lincoln",
      lastName: "Patifield",
      phone: "959-361-6622",
      address: "6211 Bay Trail",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "a83230ec-32b8-45f0-90a9-723ee5ee1c22",
        condition: "Diabetes",
        dateDiagnosed: "1/25/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "2970ca74-80f2-4700-a1c7-5ea386749405",
    email: "jtrowle29@mac.com",
    profile: {
      firstName: "Jolee",
      lastName: "Trowle",
      phone: "514-263-7759",
      address: "001 Columbus Park",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "f582f790-ed94-449f-b4ac-75ddfbf40a45",
        condition: "Asthma",
        dateDiagnosed: "10/4/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "0629e95a-49da-477e-a008-d016e2804647",
    email: "zpearcey2a@w3.org",
    profile: {
      firstName: "Zenia",
      lastName: "Pearcey",
      phone: "734-614-3411",
      address: "15534 Armistice Place",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "be0ec3f8-a2b4-4c9d-b6f0-3415f7bcd380",
        condition: "Asthma",
        dateDiagnosed: "2/13/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "39c947b6-83a5-481e-b9d7-02436302f668",
    email: "wmartijn2b@mashable.com",
    profile: {
      firstName: "Washington",
      lastName: "Martijn",
      phone: "696-961-6454",
      address: "39040 Shoshone Trail",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "36ebbcff-67d7-4c2d-9a63-e9ec8a432242",
        condition: "Asthma",
        dateDiagnosed: "4/29/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "deed8277-2dea-4b5f-9af7-08608449679c",
    email: "mdreye2c@mediafire.com",
    profile: {
      firstName: "Mayer",
      lastName: "Dreye",
      phone: "641-203-2970",
      address: "6 Russell Lane",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "20dec649-8a66-42b1-acec-69917216fe17",
        condition: "Diabetes",
        dateDiagnosed: "2/13/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "28b52e02-ec46-480e-a17d-a0429b897304",
    email: "sworsnop2d@webeden.co.uk",
    profile: {
      firstName: "Saundra",
      lastName: "Worsnop",
      phone: "802-414-0692",
      address: "64299 Walton Way",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "30c41d15-ff21-4208-96e2-c2d8ebe3ca00",
        condition: "Diabetes",
        dateDiagnosed: "3/10/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "87af87fc-090e-4caa-8bd5-c0aa0d7b2fc0",
    email: "griggulsford2e@apache.org",
    profile: {
      firstName: "Gilbertine",
      lastName: "Riggulsford",
      phone: "505-910-2365",
      address: "645 Johnson Terrace",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "fae3904e-628d-477c-a935-07410ac58fd6",
        condition: "Asthma",
        dateDiagnosed: "10/20/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "27a55bfd-eb28-472c-b1f2-85c84fd28d63",
    email: "cmallabon2f@sourceforge.net",
    profile: {
      firstName: "Ciro",
      lastName: "Mallabon",
      phone: "562-277-5515",
      address: "8044 Memorial Center",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "05c48960-0d9a-454a-898a-8191b4995541",
        condition: "Diabetes",
        dateDiagnosed: "5/20/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "a35b8663-13fc-4254-b529-e69e74f70dc3",
    email: "pcroston2g@list-manage.com",
    profile: {
      firstName: "Pate",
      lastName: "Croston",
      phone: "663-529-8371",
      address: "080 Stang Alley",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "7e9040bf-3a85-4b67-9626-3a8ccd4945c7",
        condition: "Hypertension",
        dateDiagnosed: "12/5/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "366b0fe1-6922-4b2c-934b-1ed033634754",
    email: "mlewty2h@skyrock.com",
    profile: {
      firstName: "Marshall",
      lastName: "Lewty",
      phone: "239-952-3274",
      address: "7093 Linden Street",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "a0364320-31e2-4153-a883-bbf9c8098c55",
        condition: "Hypertension",
        dateDiagnosed: "6/10/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "ed803d46-029b-4a6d-bd94-385ed05e8792",
    email: "ttevelov2i@samsung.com",
    profile: {
      firstName: "Tabor",
      lastName: "Tevelov",
      phone: "751-318-1203",
      address: "8232 Kinsman Lane",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "4fe4d84e-6ed5-47a7-892a-5c4957a6c167",
        condition: "Asthma",
        dateDiagnosed: "9/27/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "e21118dc-a3a2-4ec7-ab92-128037b39bc6",
    email: "etatters2j@washington.edu",
    profile: {
      firstName: "Eduino",
      lastName: "Tatters",
      phone: "421-767-1221",
      address: "69 2nd Court",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "a32b33b1-6d2f-4b98-95fe-082162f82bf8",
        condition: "Asthma",
        dateDiagnosed: "5/7/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "f21e63fd-d523-4c6a-a5dc-b850bf72b046",
    email: "tbarnicott2k@moonfruit.com",
    profile: {
      firstName: "Tedda",
      lastName: "Barnicott",
      phone: "197-417-4838",
      address: "617 Tennyson Lane",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "bd0439e6-15ad-42f3-9dbf-eb7f57f40b98",
        condition: "Asthma",
        dateDiagnosed: "2/24/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "78e6d9ee-0bb9-44d3-8ea5-ab94d706710d",
    email: "bvakhlov2l@sphinn.com",
    profile: {
      firstName: "Bette-ann",
      lastName: "Vakhlov",
      phone: "520-230-8780",
      address: "549 Meadow Valley Plaza",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "5ecd0214-2771-4f7e-9cf5-0c0ec209ba96",
        condition: "Diabetes",
        dateDiagnosed: "3/31/2024",
        treatment: "Medication and lifestyle changes",
      },
    ],
  },
  {
    id: "8671f6f0-f0cb-460e-8e2c-d3689366efaf",
    email: "gengelbrecht2m@gravatar.com",
    profile: {
      firstName: "Gerard",
      lastName: "Engelbrecht",
      phone: "933-328-3366",
      address: "39 Linden Way",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "604d04ca-eb86-4955-b3f6-dc8d2d6f77be",
        condition: "Asthma",
        dateDiagnosed: "12/12/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "39b0b91b-ccf0-4584-a812-eb13567e9d74",
    email: "wdecort2n@uol.com.br",
    profile: {
      firstName: "Wandis",
      lastName: "Decort",
      phone: "333-259-1297",
      address: "35 Bluejay Trail",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "8a278978-96b2-4acc-8768-9b28cef5b28e",
        condition: "Hypertension",
        dateDiagnosed: "10/6/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "fb3174ea-c078-4ec0-a29a-3275512e74ac",
    email: "tcritchlow2o@amazon.com",
    profile: {
      firstName: "Tibold",
      lastName: "Critchlow",
      phone: "609-508-5180",
      address: "00 Forest Drive",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "37eab1aa-56af-4c57-99b9-d2093e909408",
        condition: "Hypertension",
        dateDiagnosed: "1/9/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "111e8918-8b2b-45fa-bb3f-a72666e84809",
    email: "rhonnan2p@telegraph.co.uk",
    profile: {
      firstName: "Ricki",
      lastName: "Honnan",
      phone: "405-523-1505",
      address: "3 Forest Dale Parkway",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "68307fc3-6474-4158-80dd-df5a69feb657",
        condition: "Diabetes",
        dateDiagnosed: "11/4/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
  {
    id: "44499d5f-e0b2-4a36-8096-d0fa2aff7ed7",
    email: "asheddan2q@ehow.com",
    profile: {
      firstName: "Aguie",
      lastName: "Sheddan",
      phone: "805-662-6854",
      address: "6397 Lakewood Gardens Circle",
      dateOfBirth: getRandomDate(),
      gender: "Male",
    },
    medicalHistory: [
      {
        id: "8ed2647a-9c0d-47f9-aa4b-6312adb5ab7c",
        condition: "Diabetes",
        dateDiagnosed: "6/30/2024",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "7ce54112-1900-4cd6-bf2d-f97a0045d15b",
    email: "bgrahl2r@netvibes.com",
    profile: {
      firstName: "Blanche",
      lastName: "Grahl",
      phone: "510-838-3676",
      address: "3 Oneill Parkway",
      dateOfBirth: getRandomDate(),
      gender: "Female",
    },
    medicalHistory: [
      {
        id: "9b971235-af68-4e5e-a44a-f4ccd1ec163e",
        condition: "Asthma",
        dateDiagnosed: "5/27/2024",
        treatment: "Insulin therapy and dietary changes",
      },
    ],
  },
];

const fakeAppointments: Appointment[] = [
  {
    id: "8f45da93-c316-4d3e-ae08-abee3c6cc060",
    patient: {
      id: "be280479-5c6d-4d94-9874-529b86166bba",
      email: "achaudrelle0@scientificamerican.com",
      profile: {
        firstName: "Alix",
        lastName: "Chaudrelle",
        phone: "532-185-4947",
        address: "0814 Fairfield Place",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "7eed8c1f-d1a0-40e8-abad-3abb919681a1",
          condition: "Other secondary gout, elbow",
          dateDiagnosed: "7/20/2024",
          treatment: "Atorvastatin Calcium",
        },
      ],
    },
    doctorId: "cb853fbf-16f1-4a1d-af84-c4e19c7f0cf1",
    date: getRandomDate(),
    time: "8:20 AM",
    status: "rejected",
    reason: "Routine check-up",
  },
  {
    id: "70d4aa20-8a5f-4be2-9db3-e3b6f543e98f",
    patient: {
      id: "d58fd8bc-8395-4cef-8ac0-d95bb195f73b",
      email: "lladbury1@dropbox.com",
      profile: {
        firstName: "Lonny",
        lastName: "Ladbury",
        phone: "502-610-5070",
        address: "86 Mayfield Road",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "0406cc4c-7438-4125-b7db-8d3531717a7d",
          condition: "Sprain of rotator cuff capsule",
          dateDiagnosed: "11/27/2024",
          treatment: "Hydroxyzine Hydrochloride",
        },
      ],
    },
    doctorId: "18832975-7cba-420d-9b57-3941d38f8600",
    date: getRandomDate(),
    time: "4:35 AM",
    status: "pending",
    reason: "Sleep disorder evaluation",
  },
  {
    id: "ff81e4c7-3194-4352-a18d-39c6530b47d9",
    patient: {
      id: "bf787825-669f-4467-b22c-b31e8859b76c",
      email: "gclarkewilliams2@spiegel.de",
      profile: {
        firstName: "Gabby",
        lastName: "Clarke-Williams",
        phone: "275-874-7200",
        address: "91016 Delladonna Avenue",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "fb4a6659-e576-4674-9ebf-a078b019192f",
          condition: "Atelectasis",
          dateDiagnosed: "6/13/2024",
          treatment: "conjugated estrogens/bazedoxifene",
        },
      ],
    },
    doctorId: "479665ee-fa04-4ca1-aec7-628700efe4eb",
    date: getRandomDate(),
    time: "2:55 PM",
    status: "accepted",
    reason: "Allergy testing",
  },
  {
    id: "7d36c7b2-cb83-4333-b95f-9e80ccec00c8",
    patient: {
      id: "f4e053b5-799e-4b47-b09e-4b9954a2e366",
      email: "skarleman3@dedecms.com",
      profile: {
        firstName: "Steffen",
        lastName: "Karleman",
        phone: "563-411-0526",
        address: "70 Grasskamp Alley",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "93e799be-d1e2-42a7-a1eb-5610771891dc",
          condition:
            "Toxic effect of unspecified corrosive substance, assault, sequela",
          dateDiagnosed: "1/15/2024",
          treatment:
            "Cochlearia Officinalis, Echinacea, Hydrastis Canadensis, Lomatium Dissectum, Tabebuia Imipetiginosa, Propolis, Glandula Suprarenalis Suis",
        },
      ],
    },
    doctorId: "7c20c748-a622-4f4a-8e00-f5d4883ffb94",
    date: getRandomDate(),
    time: "5:59 PM",
    status: "accepted",
    reason: "Vaccination",
  },
  {
    id: "e1a5828b-6e66-489e-b284-5dd530e7a99b",
    patient: {
      id: "08f03251-9a1e-43b1-82b9-4a409cde767d",
      email: "cforshaw4@sogou.com",
      profile: {
        firstName: "Clayborn",
        lastName: "Forshaw",
        phone: "476-108-6108",
        address: "4873 Ilene Plaza",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "8c5d4e6e-e241-4906-969b-2bb94c1c5bc6",
          condition:
            "Term delivery with preterm labor, third trimester, fetus 5",
          dateDiagnosed: "1/25/2024",
          treatment: "ENTACAPONE",
        },
      ],
    },
    doctorId: "b07cb4eb-0841-4180-9ce7-0690c17fa447",
    date: getRandomDate(),
    time: "3:11 PM",
    status: "rejected",
    reason: "Cardiology consultation",
  },
  {
    id: "a31f2f75-2ad4-408b-935e-eb6dcd4061bc",
    patient: {
      id: "0b71fe83-232b-4195-ac25-80ee6b144c9b",
      email: "ebaker5@soundcloud.com",
      profile: {
        firstName: "Emilia",
        lastName: "Baker",
        phone: "793-224-5875",
        address: "01285 Golf View Point",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "19ffc8ba-b4e4-49d8-bdd6-5834f7c72bf8",
          condition:
            "Localization-related (focal) (partial) symptomatic epilepsy and epileptic syndromes with complex partial seizures, not intractable, without status epilepticus",
          dateDiagnosed: "10/16/2024",
          treatment: "Triclosan",
        },
      ],
    },
    doctorId: "99643aa8-01b3-4c4d-9131-41746a077074",
    date: getRandomDate(),
    time: "1:54 PM",
    status: "pending",
    reason: "Orthopedic consultation",
  },
  {
    id: "67a146b8-e4ca-4d54-83eb-c14c08c8a6f7",
    patient: {
      id: "59768cea-cc6b-465f-b20e-6d3d2373e58d",
      email: "hthorbon6@blogspot.com",
      profile: {
        firstName: "Hershel",
        lastName: "Thorbon",
        phone: "989-858-3572",
        address: "11458 Sage Plaza",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "0be4a919-39ca-454f-b024-446ee4e6197e",
          condition: "Otorrhea, left ear",
          dateDiagnosed: "10/2/2024",
          treatment: "Hydrogen Peroxide",
        },
      ],
    },
    doctorId: "79591539-7def-4025-93eb-810082fe7c30",
    date: getRandomDate(),
    time: "7:22 AM",
    status: "accepted",
    reason: "Annual physical exam",
  },
  {
    id: "db66b072-7262-4b25-88d0-1eb50cc2eccc",
    patient: {
      id: "cf6be744-6a79-4b20-b1fb-c090c2edfa9a",
      email: "zlibri7@icio.us",
      profile: {
        firstName: "Zonda",
        lastName: "Libri",
        phone: "768-953-2315",
        address: "31 Coolidge Alley",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "a208a680-6bc7-4f44-bbdd-3346d051ba39",
          condition:
            "Superficial foreign body of unspecified ear, subsequent encounter",
          dateDiagnosed: "12/26/2024",
          treatment: "tapentadol hydrochloride",
        },
      ],
    },
    doctorId: "8ee0fd22-77e0-41c4-a55d-46bf14afe3f6",
    date: getRandomDate(),
    time: "12:57 AM",
    status: "rejected",
    reason: "Annual physical exam",
  },
  {
    id: "a0a51428-08c5-4629-ac10-77f884f69fe3",
    patient: {
      id: "7492dd0d-0cc9-4098-b7bb-ef08bb543b02",
      email: "rbinion8@printfriendly.com",
      profile: {
        firstName: "Ralph",
        lastName: "Binion",
        phone: "334-901-2921",
        address: "1657 Westerfield Pass",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "ce8c8146-764c-404b-b186-5219577154a4",
          condition:
            "Wedge compression fracture of first lumbar vertebra, subsequent encounter for fracture with nonunion",
          dateDiagnosed: "4/7/2024",
          treatment: "Dimethicone, Octinoxate, and Oxybenzone",
        },
      ],
    },
    doctorId: "a87cc7e9-6a42-4063-88ae-0faccf465e39",
    date: getRandomDate(),
    time: "1:17 AM",
    status: "pending",
    reason: "Lab test results discussion",
  },
  {
    id: "faf53ab6-ed7b-430d-b7d3-bdad9df6c5d5",
    patient: {
      id: "f873f64b-002d-4ecd-acfd-d131e6b10999",
      email: "gesmead9@wired.com",
      profile: {
        firstName: "Glendon",
        lastName: "Esmead",
        phone: "114-636-2815",
        address: "73 Corry Trail",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "a601ff6e-1e79-4c8a-8824-1c8939029fc4",
          condition:
            "Intraoperative hemorrhage and hematoma of a circulatory system organ or structure complicating a cardiac bypass",
          dateDiagnosed: "6/13/2024",
          treatment: "Iodine Bush",
        },
      ],
    },
    doctorId: "0eb37b85-6504-457e-b868-61b7927b3412",
    date: getRandomDate(),
    time: "2:08 PM",
    status: "accepted",
    reason: "Post-operative follow-up",
  },
  {
    id: "b0289ae7-663e-4f3f-b7b5-5131324e61bf",
    patient: {
      id: "5fa3f3b8-16d5-4eb7-b02b-e26458a0189b",
      email: "dyaxleya@xinhuanet.com",
      profile: {
        firstName: "Dora",
        lastName: "Yaxley",
        phone: "137-766-4563",
        address: "0798 Independence Pass",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "6b12c7d3-00d5-4512-bf45-743e81f12f0c",
          condition:
            "Poisoning by other nonopioid analgesics and antipyretics, not elsewhere classified, accidental (unintentional)",
          dateDiagnosed: "3/5/2024",
          treatment: "clindamycin phosphate and benzoyl peroxide",
        },
      ],
    },
    doctorId: "ed268983-c527-4307-a519-a571f052ea10",
    date: getRandomDate(),
    time: "11:01 PM",
    status: "pending",
    reason: "Chronic disease management",
  },
  {
    id: "b123d31f-c64c-400e-8e20-a90365cc63c6",
    patient: {
      id: "c5b2700a-6323-4661-8031-8003fa76b224",
      email: "lrylstoneb@fastcompany.com",
      profile: {
        firstName: "Latrena",
        lastName: "Rylstone",
        phone: "923-480-4344",
        address: "007 Surrey Street",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "cc32638b-0de1-4988-b87a-2d306747feab",
          condition: "Encounter for other administrative examinations",
          dateDiagnosed: "2/25/2024",
          treatment: "Menthol and Benzocaine and Dextromethorphan Hydrobromide",
        },
      ],
    },
    doctorId: "46aa25b7-5265-4f63-9f7f-3b23350642eb",
    date: getRandomDate(),
    time: "10:12 PM",
    status: "pending",
    reason: "Sports physical",
  },
  {
    id: "0f3b4766-5db4-45c1-b5a2-73142a9c0635",
    patient: {
      id: "78ab64e0-e346-4126-a35e-55e50f97637e",
      email: "gphillippoc@home.pl",
      profile: {
        firstName: "Glenn",
        lastName: "Phillippo",
        phone: "814-106-7546",
        address: "3209 6th Circle",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "6b55ff1c-684f-4a25-b62e-3044e7b0de02",
          condition:
            "Unspecified injury of flexor muscle, fascia and tendon of unspecified thumb at forearm level",
          dateDiagnosed: "6/8/2024",
          treatment: "Calc fluor , Calc phos, Nat mur",
        },
      ],
    },
    doctorId: "8cb44cbb-d9cf-4f70-8086-0760d3d94e6f",
    date: getRandomDate(),
    time: "1:12 AM",
    status: "pending",
    reason: "Pediatric check-up",
  },
  {
    id: "4d748672-51f2-4f55-944c-8393a893b5cf",
    patient: {
      id: "01ded70c-4ba6-4304-b49d-f5586a77329e",
      email: "sjancikd@mediafire.com",
      profile: {
        firstName: "Stephine",
        lastName: "Jancik",
        phone: "338-599-5190",
        address: "02540 Nobel Way",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "4c34fb47-b328-4f6b-b38f-dc42e4fd1e0b",
          condition:
            "Toxic effect of venom of other snake, intentional self-harm",
          dateDiagnosed: "9/18/2024",
          treatment: "GLYCERIN",
        },
      ],
    },
    doctorId: "e270a4cd-e0a1-4f94-a938-fc757a247bda",
    date: getRandomDate(),
    time: "7:15 AM",
    status: "rejected",
    reason: "Vaccination",
  },
  {
    id: "7c3a5f67-ba58-4cbc-b014-cc8b9cc70bd0",
    patient: {
      id: "a1e9bd92-e38d-4dd4-b0ea-57aea42460c8",
      email: "aflecknelle@jalbum.net",
      profile: {
        firstName: "Alexandro",
        lastName: "Flecknell",
        phone: "354-221-6802",
        address: "35106 Marquette Street",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "4056f8e0-934a-4273-a9c7-0ddcd219deb0",
          condition:
            "Unspecified fracture of shaft of unspecified femur, subsequent encounter for closed fracture with nonunion",
          dateDiagnosed: "3/11/2024",
          treatment: "Zinc Oxide",
        },
      ],
    },
    doctorId: "163253e0-e7ae-48d9-a762-5223d5f488cd",
    date: getRandomDate(),
    time: "2:45 AM",
    status: "rejected",
    reason: "Routine check-up",
  },
  {
    id: "64030a0f-1af2-43a3-b446-25188993ca7d",
    patient: {
      id: "c59b32c1-194a-4bea-8e2f-d097e84e71ad",
      email: "tkinneallyf@ow.ly",
      profile: {
        firstName: "Torry",
        lastName: "Kinneally",
        phone: "965-519-0629",
        address: "24 Hooker Terrace",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "bc05d19f-5980-4334-a8fa-f4786c2a8083",
          condition: "Other fracture of shaft of right humerus",
          dateDiagnosed: "1/2/2024",
          treatment: "Treatment Set TS332850",
        },
      ],
    },
    doctorId: "8f885355-6b4e-4aeb-90f3-00ed3f5f8562",
    date: getRandomDate(),
    time: "8:53 PM",
    status: "rejected",
    reason: "Orthopedic consultation",
  },
  {
    id: "15887136-d84f-40f2-8b2b-9fdd67ac156f",
    patient: {
      id: "2552888c-818c-4d36-92ef-7faa73998200",
      email: "tgallearg@wunderground.com",
      profile: {
        firstName: "Thaddus",
        lastName: "Gallear",
        phone: "471-336-9885",
        address: "70 Bartelt Drive",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "2cf068f5-60fc-43a0-b1ca-78f90980a2df",
          condition: "Toxic effects of tetrachloroethylene",
          dateDiagnosed: "2/19/2024",
          treatment: "Chlorpheniramine maleate and Phenylephrine HCl",
        },
      ],
    },
    doctorId: "5d8618db-acd8-4a70-8e4a-24d5bf84ef66",
    date: getRandomDate(),
    time: "2:46 AM",
    status: "accepted",
    reason: "Sleep disorder evaluation",
  },
  {
    id: "5ae26fcc-57ef-442d-8b80-7ca1a051b189",
    patient: {
      id: "2f8a2ed3-1505-4621-9c59-f7a8aef431dc",
      email: "iregnardh@cnbc.com",
      profile: {
        firstName: "Isadore",
        lastName: "Regnard",
        phone: "896-415-0482",
        address: "1 Northfield Street",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "29e1367f-4f46-4d92-a161-d0d6515ed51f",
          condition:
            "Driver of heavy transport vehicle injured in collision with other nonmotor vehicle in traffic accident, sequela",
          dateDiagnosed: "11/16/2024",
          treatment: "Morphine Sulfate",
        },
      ],
    },
    doctorId: "5c787187-15e3-4c7d-9d27-c1d05ae4d9d6",
    date: getRandomDate(),
    time: "3:52 AM",
    status: "accepted",
    reason: "Neurology consultation",
  },
  {
    id: "5b69d663-05f0-47bc-b03c-029d6b2ca66f",
    patient: {
      id: "f7c205bd-47b5-4267-9204-7859d2bbdfd3",
      email: "kestabrooki@smugmug.com",
      profile: {
        firstName: "Karl",
        lastName: "Estabrook",
        phone: "522-758-9026",
        address: "28 Amoth Road",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "568f19ca-3828-4508-a919-d1a1a51c1c9c",
          condition:
            "Military operations involving explosion due to accidental detonation and discharge of own munitions or munitions launch device, military personnel",
          dateDiagnosed: "8/20/2024",
          treatment: "Hydrocodone Bitartrate and Acetaminophen",
        },
      ],
    },
    doctorId: "8a2d01c9-352e-4b57-9355-ec699f728739",
    date: getRandomDate(),
    time: "5:45 AM",
    status: "pending",
    reason: "Injury evaluation",
  },
  {
    id: "35f6ad5a-4cfc-4adb-97a5-f09cfb114772",
    patient: {
      id: "9eb79aa6-c4bc-4f60-b000-4bf16583063b",
      email: "jcroughanj@newyorker.com",
      profile: {
        firstName: "Josy",
        lastName: "Croughan",
        phone: "186-967-4049",
        address: "622 Mockingbird Parkway",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "2b063809-78f3-4e81-bfb1-b22655f895e6",
          condition:
            "Other specified injury of muscle, fascia and tendon of unspecified hip, initial encounter",
          dateDiagnosed: "1/30/2024",
          treatment: "standardized senna concentrate",
        },
      ],
    },
    doctorId: "68ea9d1f-e762-468b-bbd4-5514549f9384",
    date: getRandomDate(),
    time: "9:00 PM",
    status: "pending",
    reason: "Pre-operative assessment",
  },
  {
    id: "eebdbe4b-ea67-460f-acff-6b6e9f375c99",
    patient: {
      id: "fb46484b-ca6e-472d-8608-07c0a75b20ee",
      email: "dlesork@go.com",
      profile: {
        firstName: "Denys",
        lastName: "Lesor",
        phone: "744-742-8845",
        address: "4409 Havey Park",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "0cdc85c9-2e72-4f1c-be5a-f66accbdd808",
          condition:
            "Burn of third degree of unspecified hand, unspecified site, sequela",
          dateDiagnosed: "6/18/2024",
          treatment: "Oxygen",
        },
      ],
    },
    doctorId: "cc87fdeb-e26a-4af1-8fac-6e3ac1a840b5",
    date: getRandomDate(),
    time: "7:02 PM",
    status: "pending",
    reason: "Asthma management",
  },
  {
    id: "f8f9a28f-1878-4a3b-8d59-1b41b7e05142",
    patient: {
      id: "5dc439a8-9197-4e56-8502-314cf3011d3c",
      email: "mblackshawl@patch.com",
      profile: {
        firstName: "Merralee",
        lastName: "Blackshaw",
        phone: "711-449-6533",
        address: "8 Talmadge Drive",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "b6e11a9e-2d35-44e3-9e81-b7699fbb323c",
          condition:
            "Underdosing of other drugs, medicaments and biological substances, sequela",
          dateDiagnosed: "9/21/2024",
          treatment: "NOT APPLICABLE",
        },
      ],
    },
    doctorId: "5230f36b-ba91-4da4-90a9-16109a4d2046",
    date: getRandomDate(),
    time: "9:21 PM",
    status: "pending",
    reason: "Consultation for new symptoms",
  },
  {
    id: "6dc6ee5a-b83f-4cfa-a083-51fbcee21f7e",
    patient: {
      id: "34488e5b-5634-4209-949a-51b1c09c4355",
      email: "ccronkshawm@yandex.ru",
      profile: {
        firstName: "Caryl",
        lastName: "Cronkshaw",
        phone: "413-865-9006",
        address: "07612 Monterey Lane",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "31e23570-3fa4-4df3-8a0c-c77a6994bd4f",
          condition:
            "Displaced fracture of neck of first metacarpal bone, right hand, sequela",
          dateDiagnosed: "2/11/2024",
          treatment: "Potassium nitrate and Sodium Fluoride",
        },
      ],
    },
    doctorId: "60c23904-fa67-415e-bfee-3b54ab56764e",
    date: getRandomDate(),
    time: "5:19 PM",
    status: "rejected",
    reason: "Consultation for new symptoms",
  },
  {
    id: "47a69d5c-5069-456b-96dd-a58124ca91b0",
    patient: {
      id: "df137212-c61a-4c66-9eaa-1a0999288d4e",
      email: "amcnaughtonn@bravesites.com",
      profile: {
        firstName: "Ariela",
        lastName: "McNaughton",
        phone: "324-594-5586",
        address: "7399 Division Crossing",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "fde38e9f-8317-4953-8e27-3c6a57dec6f7",
          condition:
            "Poisoning by other nonsteroidal anti-inflammatory drugs [NSAID], accidental (unintentional), initial encounter",
          dateDiagnosed: "11/22/2024",
          treatment: "levetiracetam",
        },
      ],
    },
    doctorId: "293ef9f0-e224-4b37-93a6-c5540ab404e5",
    date: getRandomDate(),
    time: "9:34 PM",
    status: "rejected",
    reason: "Pregnancy confirmation",
  },
  {
    id: "28e92594-b8de-4477-96ba-cae010240b00",
    patient: {
      id: "759ec3ba-d983-4a98-8fee-ca8c68e4a4c2",
      email: "bklaffo@tinyurl.com",
      profile: {
        firstName: "Blithe",
        lastName: "Klaff",
        phone: "311-729-9922",
        address: "4284 Marquette Park",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "dd1cda80-2941-4719-a3ad-4aedcb3ab9c3",
          condition:
            "Nondisplaced longitudinal fracture of right patella, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
          dateDiagnosed: "1/21/2024",
          treatment: "Morphine Sulfate",
        },
      ],
    },
    doctorId: "dc35dd26-a008-44fd-bb32-08f56d2158be",
    date: getRandomDate(),
    time: "4:28 PM",
    status: "rejected",
    reason: "Lab test results discussion",
  },
  {
    id: "54370230-b411-41da-a1e0-c972854b76ea",
    patient: {
      id: "0d833e8a-e01c-4868-b484-a3a776d40ce8",
      email: "aechallierp@nydailynews.com",
      profile: {
        firstName: "Antonius",
        lastName: "Echallier",
        phone: "397-636-6546",
        address: "0828 Farwell Lane",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "03ba566a-9c8c-44e0-bdde-c619e93100da",
          condition:
            "Other fracture of head and neck of right femur, subsequent encounter for closed fracture with malunion",
          dateDiagnosed: "9/28/2024",
          treatment: "methohexital sodium",
        },
      ],
    },
    doctorId: "b0aec2b1-2363-4813-94b8-fb0427f9c956",
    date: getRandomDate(),
    time: "4:18 AM",
    status: "pending",
    reason: "Prescription refill",
  },
  {
    id: "11f08d61-08f2-458d-803c-02a2dd1e1476",
    patient: {
      id: "8a5793b5-75c9-47c0-9299-9856d5637d9e",
      email: "usabbertonq@theatlantic.com",
      profile: {
        firstName: "Uta",
        lastName: "Sabberton",
        phone: "376-679-9692",
        address: "229 Talisman Junction",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "dd14ce01-3773-4303-94f0-27c304367a8c",
          condition:
            "Displaced bimalleolar fracture of left lower leg, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
          dateDiagnosed: "4/16/2024",
          treatment: "Titanium Dioxide, Zinc Oxide",
        },
      ],
    },
    doctorId: "3547c729-63b7-4146-a367-c78d893b26ad",
    date: getRandomDate(),
    time: "6:27 PM",
    status: "accepted",
    reason: "Vaccination",
  },
  {
    id: "02e3c707-3a41-44dd-afce-537e48159d7e",
    patient: {
      id: "84b7ee4b-f05d-4e0d-8352-d76e325c3be3",
      email: "fsheffieldr@unicef.org",
      profile: {
        firstName: "Farleigh",
        lastName: "Sheffield",
        phone: "444-366-1249",
        address: "0412 Blackbird Place",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "e2279b8e-eeaa-45a3-9422-d1441df9bd8f",
          condition: "Unspecified sprain of unspecified hip, sequela",
          dateDiagnosed: "1/9/2024",
          treatment: "Oxygen",
        },
      ],
    },
    doctorId: "6068556f-050b-4c8e-a1ef-316a1497dded",
    date: getRandomDate(),
    time: "9:22 AM",
    status: "accepted",
    reason: "Pregnancy confirmation",
  },
  {
    id: "04c6a219-02b3-496a-b44e-e23a6baf3baa",
    patient: {
      id: "42277743-f9af-4da6-ba1e-762d9a31465d",
      email: "aacombs@dion.ne.jp",
      profile: {
        firstName: "Ashil",
        lastName: "Acomb",
        phone: "827-219-8628",
        address: "940 North Point",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "8ecf9b22-474b-4b35-ae58-10844ea4afbf",
          condition:
            "Cystic meniscus, posterior horn of lateral meniscus, left knee",
          dateDiagnosed: "10/17/2024",
          treatment: "TRICLOSAN",
        },
      ],
    },
    doctorId: "17c1eb3a-6d27-4afb-97cb-d2e7827bc2c7",
    date: getRandomDate(),
    time: "4:31 AM",
    status: "pending",
    reason: "Neurology consultation",
  },
  {
    id: "370ee600-c946-4abe-b89b-4f5b51327f09",
    patient: {
      id: "cd752b54-0c0a-44cc-aa27-7c974fb05c27",
      email: "wcordobest@google.co.uk",
      profile: {
        firstName: "Willem",
        lastName: "Cordobes",
        phone: "868-389-1145",
        address: "0647 North Avenue",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "d827af78-ae13-41dc-9035-0cf2d0689a91",
          condition:
            "Displaced fracture of neck of scapula, unspecified shoulder",
          dateDiagnosed: "5/11/2024",
          treatment:
            "Acetaminophen, Dextromethorphan HBr, Doxylamine succinate",
        },
      ],
    },
    doctorId: "fd66b2e4-c470-4dd5-bd15-a604fc723a07",
    date: getRandomDate(),
    time: "6:28 PM",
    status: "rejected",
    reason: "Lab test results discussion",
  },
  {
    id: "ad5d8d75-02e9-4d9b-a40a-107edc114f6e",
    patient: {
      id: "b6a47940-a208-4126-89c7-f7fbfa366f16",
      email: "tcritchu@qq.com",
      profile: {
        firstName: "Teodoro",
        lastName: "Critch",
        phone: "834-428-4663",
        address: "0 Birchwood Junction",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "84d498bd-fa21-47b3-91ce-3424ea8d5e24",
          condition: "Dystonia, unspecified",
          dateDiagnosed: "1/31/2024",
          treatment: "SODIUM FLUORIDE",
        },
      ],
    },
    doctorId: "61cec475-c049-4875-940b-f331cb739f18",
    date: getRandomDate(),
    time: "7:32 PM",
    status: "accepted",
    reason: "Chronic disease management",
  },
  {
    id: "f81c586c-d1a8-42f5-a6f0-4836eed74f5b",
    patient: {
      id: "a03c2e79-f96c-4c97-b47e-e692f7a6b544",
      email: "khutchingesv@google.com.hk",
      profile: {
        firstName: "Kenneth",
        lastName: "Hutchinges",
        phone: "271-371-3465",
        address: "29264 Londonderry Way",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "4f2eb022-8daf-4605-9a39-1ca489b171b8",
          condition: "Overexertion from prolonged static or awkward postures",
          dateDiagnosed: "6/24/2024",
          treatment: "octinoxate, octocrylene, oxybenzone, zinc oxide",
        },
      ],
    },
    doctorId: "535eeec8-193f-408d-8bf8-6de708b0ff02",
    date: getRandomDate(),
    time: "6:09 AM",
    status: "pending",
    reason: "Asthma management",
  },
  {
    id: "0336d128-d7ee-4211-9b5e-ccd58497dddc",
    patient: {
      id: "d2633d27-cc7d-40ab-82af-1c9f0a9efe96",
      email: "pgeorgelinw@pagesperso-orange.fr",
      profile: {
        firstName: "Perle",
        lastName: "Georgelin",
        phone: "236-929-0167",
        address: "1 Karstens Court",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "db831755-7252-438b-8cd8-ffe086e1106e",
          condition: "Corrosion of second degree of left knee",
          dateDiagnosed: "12/1/2024",
          treatment: "Diphenhydramine Hydrochloride",
        },
      ],
    },
    doctorId: "58e7fd36-79a4-40a7-a16f-35ca74b1703c",
    date: getRandomDate(),
    time: "1:56 AM",
    status: "accepted",
    reason: "Pediatric check-up",
  },
  {
    id: "81ac9334-fec0-445b-9b54-78a11309c3b3",
    patient: {
      id: "7905ec33-1f06-4f98-b970-8e81efa7b077",
      email: "dcrottyx@blogs.com",
      profile: {
        firstName: "Derward",
        lastName: "Crotty",
        phone: "442-821-3712",
        address: "890 Bowman Center",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "426b8bc8-83b8-41a0-b515-5ec2ffcaa6e2",
          condition:
            "Displaced segmental fracture of shaft of ulna, right arm, subsequent encounter for closed fracture with delayed healing",
          dateDiagnosed: "6/22/2024",
          treatment: "Naproxen Sodium",
        },
      ],
    },
    doctorId: "850decfa-a499-405a-91c1-2e3b1052d3a5",
    date: getRandomDate(),
    time: "6:35 AM",
    status: "rejected",
    reason: "Lab test results discussion",
  },
  {
    id: "ec26d62d-f2ef-44fd-b418-602142fbdae3",
    patient: {
      id: "0d9e5f10-5bdb-4215-9b54-ea2d9dacdbb8",
      email: "tmolandy@homestead.com",
      profile: {
        firstName: "Terri",
        lastName: "Moland",
        phone: "669-409-6797",
        address: "0 Packers Road",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "a22fa1de-3d92-489d-861a-82e0ec77b070",
          condition:
            "Pedal cycle driver injured in collision with unspecified motor vehicles in traffic accident",
          dateDiagnosed: "12/4/2024",
          treatment: "Niacinamide, Adenosine",
        },
      ],
    },
    doctorId: "06bdedae-cc87-4dd9-87ea-eda3a1c7ce34",
    date: getRandomDate(),
    time: "6:34 PM",
    status: "pending",
    reason: "Dermatology consultation",
  },
  {
    id: "07b62e93-bf42-4ea0-883e-ce69223d88f5",
    patient: {
      id: "ee611ead-fda1-4761-9a88-a5c3b2a742e1",
      email: "cdeloozez@hud.gov",
      profile: {
        firstName: "Cart",
        lastName: "Delooze",
        phone: "692-732-5877",
        address: "398 Victoria Crossing",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "b39518b4-0763-4c89-9c66-562d90aa1689",
          condition: "Other injury of unspecified part of small intestine",
          dateDiagnosed: "12/26/2024",
          treatment: "TITANIUM DIOXIDE OCTINOXATE",
        },
      ],
    },
    doctorId: "1c81ee81-d5da-4d1d-8ca9-b7bf15a13886",
    date: getRandomDate(),
    time: "10:28 PM",
    status: "pending",
    reason: "Geriatric care",
  },
  {
    id: "37ce53c8-6084-463a-9658-30d0f144e9f1",
    patient: {
      id: "7315b307-ab8a-4fa6-9b21-464b2c3ca878",
      email: "jhanselmann10@cyberchimps.com",
      profile: {
        firstName: "Joachim",
        lastName: "Hanselmann",
        phone: "880-788-9817",
        address: "1828 Mockingbird Center",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "801ce05a-1032-427b-85dd-6cd7b103dd92",
          condition:
            "Nondisplaced fracture of left ulna styloid process, subsequent encounter for closed fracture with delayed healing",
          dateDiagnosed: "4/9/2024",
          treatment: "abacavir sulfate",
        },
      ],
    },
    doctorId: "1a105d1a-321c-4330-b8be-4969dd2e8f58",
    date: getRandomDate(),
    time: "8:22 PM",
    status: "rejected",
    reason: "Orthopedic consultation",
  },
  {
    id: "f310b0ed-6f33-4925-9ac8-3c69f4ef0ba0",
    patient: {
      id: "b9499b44-159c-4461-9b2c-59eb267ca7f0",
      email: "rbartolommeo11@sitemeter.com",
      profile: {
        firstName: "Ruprecht",
        lastName: "Bartolommeo",
        phone: "399-265-9155",
        address: "4502 Schiller Parkway",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "1cb63558-c4a1-4cda-af16-f55ef2615af3",
          condition: "Corrosion of unspecified degree of right thumb (nail)",
          dateDiagnosed: "3/10/2024",
          treatment: "Imipramine Hydrochloride",
        },
      ],
    },
    doctorId: "b21fe791-f020-4673-bbd4-2d627df507db",
    date: getRandomDate(),
    time: "4:51 PM",
    status: "rejected",
    reason: "Chronic disease management",
  },
  {
    id: "77f41168-60e8-4d45-a842-e61d755e3b3e",
    patient: {
      id: "9bdffa01-d5a8-4500-bdd5-832669153c70",
      email: "dconey12@webnode.com",
      profile: {
        firstName: "Darn",
        lastName: "Coney",
        phone: "671-500-6139",
        address: "9584 Service Center",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "4ae03b4b-d02c-4ed8-974b-d1886859a8dd",
          condition: "Tidal wave due to landslide, initial encounter",
          dateDiagnosed: "11/1/2024",
          treatment:
            "ACETAMINOPHEN,CHLORPHENIRAMINE MALEATE, PHENYLEPHRINE HYDROCHLORIDE",
        },
      ],
    },
    doctorId: "de328454-b11b-43ec-bb0b-2367037af270",
    date: getRandomDate(),
    time: "10:09 PM",
    status: "pending",
    reason: "Hypertension management",
  },
  {
    id: "10425775-2934-4eac-9013-9557fb25aa80",
    patient: {
      id: "fbd1f14f-b14d-48a3-a7a4-20a089207acc",
      email: "shuton13@spotify.com",
      profile: {
        firstName: "Sarajane",
        lastName: "Huton",
        phone: "172-911-7463",
        address: "78611 Pankratz Center",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "e523b68d-c01a-4592-a469-e943acc8283f",
          condition: "Asphyxiation due to being trapped in bed linens",
          dateDiagnosed: "7/12/2024",
          treatment: "Clindamycin in 5 Percent Dextrose",
        },
      ],
    },
    doctorId: "6df806d3-0332-407c-98cb-77c4d68b8a0d",
    date: getRandomDate(),
    time: "3:24 PM",
    status: "accepted",
    reason: "Geriatric care",
  },
  {
    id: "416db8bb-8948-44a7-a47e-99c343d9f641",
    patient: {
      id: "027f2ff3-5d1c-4272-89b4-fdf6a428e0e3",
      email: "ydo14@independent.co.uk",
      profile: {
        firstName: "Yancey",
        lastName: "Do",
        phone: "133-177-3947",
        address: "255 Burrows Circle",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "c6b253c3-c2c8-44fd-b0b4-bc67f3bd8b11",
          condition: "Nondisplaced fracture of neck of unspecified talus",
          dateDiagnosed: "9/20/2024",
          treatment: "Fexofenadine Hydrochloride",
        },
      ],
    },
    doctorId: "59a20c2c-d6a2-43a1-9158-c601fb539384",
    date: getRandomDate(),
    time: "8:07 AM",
    status: "accepted",
    reason: "Nutritional advice",
  },
  {
    id: "4637c2fd-0c4b-4b9d-900e-1f7713fab24c",
    patient: {
      id: "c21791df-340d-4e11-bbc9-915d61cc0928",
      email: "yhalbeard15@arizona.edu",
      profile: {
        firstName: "Yul",
        lastName: "Halbeard",
        phone: "907-544-2239",
        address: "22 Westend Trail",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "cdf8a632-6d59-4df1-8b81-885417e93520",
          condition:
            "Displaced segmental fracture of shaft of unspecified femur, subsequent encounter for open fracture type I or II with routine healing",
          dateDiagnosed: "8/28/2024",
          treatment: "Acetaminophen, Dextromethorphan HBr, Phenylephrine HCl",
        },
      ],
    },
    doctorId: "72b2c244-a8d8-404f-9949-7913d28141cf",
    date: getRandomDate(),
    time: "2:32 PM",
    status: "accepted",
    reason: "Routine check-up",
  },
  {
    id: "c6ec0571-175f-4a02-ac43-a730938b79bd",
    patient: {
      id: "dade0435-d990-49c1-9be1-43c23f8eb7e9",
      email: "settridge16@xrea.com",
      profile: {
        firstName: "Sibel",
        lastName: "Ettridge",
        phone: "194-718-2196",
        address: "4422 Victoria Place",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "dcd3f655-2ed9-4274-bdf7-ea5f58557018",
          condition:
            "Postprocedural hematoma of a respiratory system organ or structure following a respiratory system procedure",
          dateDiagnosed: "9/25/2024",
          treatment: "morphine sulfate",
        },
      ],
    },
    doctorId: "04ab5df5-27c8-40d6-9087-872df283d324",
    date: getRandomDate(),
    time: "2:28 PM",
    status: "accepted",
    reason: "Family planning",
  },
  {
    id: "7ef165fe-9511-4e09-a915-f702a8281bdb",
    patient: {
      id: "8e5d9e11-ca4c-40fb-a09a-eec66475b546",
      email: "bmcdougald17@360.cn",
      profile: {
        firstName: "Bartholomew",
        lastName: "McDougald",
        phone: "166-542-6999",
        address: "4679 Judy Point",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "c6f0e925-0410-4e42-80e8-2300bb6356c2",
          condition:
            "Nondisplaced fracture of lateral end of unspecified clavicle",
          dateDiagnosed: "3/7/2024",
          treatment: "lamotrigine",
        },
      ],
    },
    doctorId: "f1841ff7-9611-4148-99a5-5f9ace1c88fc",
    date: getRandomDate(),
    time: "8:58 AM",
    status: "pending",
    reason: "Diabetes management",
  },
  {
    id: "d86c75eb-3c32-4693-8002-e716da941ae3",
    patient: {
      id: "ac918038-3480-4475-8b8e-6cb02c8e989d",
      email: "nfleet18@is.gd",
      profile: {
        firstName: "Nani",
        lastName: "Fleet",
        phone: "849-918-8900",
        address: "1424 Rusk Trail",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "5ea02843-0e37-40fa-a634-d8058f9cdba5",
          condition:
            "Traumatic rupture of collateral ligament of left wrist, sequela",
          dateDiagnosed: "8/16/2024",
          treatment: "Bacitracin Neomycin Polymyxin B",
        },
      ],
    },
    doctorId: "d0316981-b26a-44cf-9d4d-b8177fe7196d",
    date: getRandomDate(),
    time: "10:30 AM",
    status: "rejected",
    reason: "Mental health consultation",
  },
  {
    id: "a72b2c70-ae52-4499-b500-d0fcf9240a44",
    patient: {
      id: "dc427c6e-230f-4d4e-8227-77a3e271be4f",
      email: "npollak19@google.com.br",
      profile: {
        firstName: "Nissie",
        lastName: "Pollak",
        phone: "381-292-0900",
        address: "381 Norway Maple Road",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "1b50780d-363a-487d-a4e2-e8c4591820ad",
          condition:
            "Other fracture of shaft of unspecified ulna, subsequent encounter for closed fracture with malunion",
          dateDiagnosed: "9/2/2024",
          treatment: "Celecoxib",
        },
      ],
    },
    doctorId: "6611025a-9a4c-431d-b622-39b80cbd5a71",
    date: getRandomDate(),
    time: "8:09 AM",
    status: "pending",
    reason: "Orthopedic consultation",
  },
  {
    id: "4e3e3259-a108-4d9e-90bf-bf63c72cb534",
    patient: {
      id: "0a8c8b52-1629-4619-a6c3-7d2d5a238bbb",
      email: "thirschmann1a@bloglines.com",
      profile: {
        firstName: "Tedra",
        lastName: "Hirschmann",
        phone: "564-300-8493",
        address: "86 Cambridge Hill",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "17b4c909-08ab-4e59-bb74-4aa63040f158",
          condition:
            "Surgical operation with anastomosis, bypass or graft as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure",
          dateDiagnosed: "9/15/2024",
          treatment: "Octocrylene",
        },
      ],
    },
    doctorId: "41e5a8be-c620-448b-913c-c4e5896f2a0b",
    date: getRandomDate(),
    time: "2:25 PM",
    status: "accepted",
    reason: "Pregnancy confirmation",
  },
  {
    id: "7c71670b-1ca5-430d-a292-6e4d04d37fd9",
    patient: {
      id: "832c310e-db45-4485-ad8f-dff03d7c121d",
      email: "sconeron1b@mtv.com",
      profile: {
        firstName: "Shane",
        lastName: "Coneron",
        phone: "928-421-7025",
        address: "4 Brickson Park Lane",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "ffc572c6-5855-4dac-89ea-363cf9ac65d6",
          condition: "Other specified disorders of amino-acid metabolism",
          dateDiagnosed: "4/13/2024",
          treatment: "Sodium Chloride",
        },
      ],
    },
    doctorId: "573f7042-4abf-407b-a368-21a96ef31613",
    date: getRandomDate(),
    time: "2:31 PM",
    status: "accepted",
    reason: "Diabetes management",
  },
  {
    id: "90761691-8ff4-4471-92f1-93f3b051343c",
    patient: {
      id: "35953c56-bfaa-4f00-96ca-4c93660a88cb",
      email: "ecardus1c@nba.com",
      profile: {
        firstName: "Egor",
        lastName: "Cardus",
        phone: "633-392-3562",
        address: "6119 Marcy Hill",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "ca45621c-8db8-4be5-bfea-aed0a8099693",
          condition:
            "Unspecified fracture of lower end of unspecified ulna, sequela",
          dateDiagnosed: "5/14/2024",
          treatment: "Apis regina Cerebri",
        },
      ],
    },
    doctorId: "51229ff1-2095-477b-9b4a-bc2f773f5a1c",
    date: getRandomDate(),
    time: "12:25 PM",
    status: "rejected",
    reason: "Routine check-up",
  },
  {
    id: "da4251cd-62cd-4a7b-b983-aaacec8dc2ef",
    patient: {
      id: "1c830ae0-ab17-4d8a-adb8-920b4c76e861",
      email: "ssoanes1d@usatoday.com",
      profile: {
        firstName: "Sheri",
        lastName: "Soanes",
        phone: "591-826-4868",
        address: "939 Walton Crossing",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "605ce197-6667-4e59-bd2d-6e3c0c32a4db",
          condition:
            "Frostbite with tissue necrosis of left arm, initial encounter",
          dateDiagnosed: "9/24/2024",
          treatment: "Cow Milk",
        },
      ],
    },
    doctorId: "4cd885af-51ab-430d-afe9-e385c6f5b616",
    date: getRandomDate(),
    time: "8:39 PM",
    status: "rejected",
    reason: "Prescription refill",
  },
  {
    id: "51dda7cf-55e3-4c41-a7b5-117c6999b101",
    patient: {
      id: "ca315e80-9199-454c-9d61-16c9bedfb1ed",
      email: "afound1e@ucoz.com",
      profile: {
        firstName: "Andonis",
        lastName: "Found",
        phone: "247-987-6650",
        address: "63376 Linden Alley",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "2d12c9ae-ff24-42ab-918b-443193ad46ea",
          condition:
            "Corrosion of third degree of unspecified site of left lower limb, except ankle and foot, initial encounter",
          dateDiagnosed: "9/10/2024",
          treatment: "adefovir dipivoxil",
        },
      ],
    },
    doctorId: "48b135ea-bf60-410d-a06c-8ca485b35072",
    date: getRandomDate(),
    time: "5:37 PM",
    status: "accepted",
    reason: "Neurology consultation",
  },
  {
    id: "7a0eb5e3-47ef-478b-b274-cf91329d9a22",
    patient: {
      id: "1a40a5a4-72a7-4ed9-a981-553a4c661c52",
      email: "zolle1f@vimeo.com",
      profile: {
        firstName: "Zonda",
        lastName: "Olle",
        phone: "879-295-9243",
        address: "085 Union Trail",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "2a9dbb48-a118-4312-896e-dca2020322e4",
          condition:
            "Striking against or struck by front passenger side automobile airbag",
          dateDiagnosed: "6/26/2024",
          treatment: "Cefazolin",
        },
      ],
    },
    doctorId: "4acda6aa-331e-4f68-9be3-72e1206074c0",
    date: getRandomDate(),
    time: "1:34 PM",
    status: "accepted",
    reason: "Sexual health consultation",
  },
  {
    id: "03e29b70-c346-4dc9-8529-7c3e4ca2dae9",
    patient: {
      id: "a9787b36-5382-49f3-b567-a514c92858bd",
      email: "jdakhov1g@tripod.com",
      profile: {
        firstName: "Judye",
        lastName: "Dakhov",
        phone: "316-140-3447",
        address: "25617 Walton Alley",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "9cdb90f4-c077-4db7-86b8-13d745806de0",
          condition: "Torus fracture of lower end of unspecified fibula",
          dateDiagnosed: "8/2/2024",
          treatment: "ASIAN GINSENG",
        },
      ],
    },
    doctorId: "5ac1bcc4-34bb-4ce0-9f26-d2b1e7d21543",
    date: getRandomDate(),
    time: "1:52 AM",
    status: "accepted",
    reason: "Follow-up visit",
  },
  {
    id: "156b4ccd-be90-4d33-9952-14c60b4ba6e6",
    patient: {
      id: "6cd8e183-a5a9-4bca-9dbb-71cbe383724c",
      email: "gsturge1h@skyrock.com",
      profile: {
        firstName: "Gale",
        lastName: "Sturge",
        phone: "647-500-3702",
        address: "4 Boyd Plaza",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "2b0c67e4-81f8-4d8d-929c-14269d3098a0",
          condition:
            "Injury of unspecified blood vessel at neck level, subsequent encounter",
          dateDiagnosed: "11/14/2024",
          treatment: "TRICLOSAN",
        },
      ],
    },
    doctorId: "e280106c-ebef-4a2a-a47e-91491dca530d",
    date: getRandomDate(),
    time: "5:58 PM",
    status: "rejected",
    reason: "Geriatric care",
  },
  {
    id: "7a854e4a-d7bf-4271-8e85-eb1cf6a68480",
    patient: {
      id: "0d5d8ac0-46e5-4005-9d75-2e5c7c52d48d",
      email: "jhuckerby1i@marketwatch.com",
      profile: {
        firstName: "Josephine",
        lastName: "Huckerby",
        phone: "314-337-6981",
        address: "5 Dwight Point",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "1b7e2f9b-6823-45fc-9f20-df1c09525296",
          condition: "Disorders resulting from impaired renal tubular function",
          dateDiagnosed: "9/21/2024",
          treatment: "hydromorphone hydrochloride",
        },
      ],
    },
    doctorId: "3af2bb3b-8e3b-461c-b0a6-ba2d47c4932e",
    date: getRandomDate(),
    time: "5:40 AM",
    status: "rejected",
    reason: "Orthopedic consultation",
  },
  {
    id: "2b4faf78-46d0-4a1f-9a27-ba37934f8eed",
    patient: {
      id: "42e862d3-dca8-42a5-864a-e1ed5d2263d7",
      email: "mbittlestone1j@digg.com",
      profile: {
        firstName: "Major",
        lastName: "Bittlestone",
        phone: "511-878-3966",
        address: "8733 Nancy Pass",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "fa3cc191-1a11-402e-9b1c-0c5bad54027d",
          condition:
            "Displaced fracture of medial wall of unspecified acetabulum, subsequent encounter for fracture with routine healing",
          dateDiagnosed: "7/24/2024",
          treatment: "Acetaminophen",
        },
      ],
    },
    doctorId: "383491ee-8826-4a6a-9237-262176a79050",
    date: getRandomDate(),
    time: "2:29 PM",
    status: "pending",
    reason: "Diabetes management",
  },
  {
    id: "697f7d62-86c9-4001-9f00-71da1dd39b77",
    patient: {
      id: "7beffc6b-f8da-4531-b940-eda4f1a9d798",
      email: "glante1k@squarespace.com",
      profile: {
        firstName: "Gilda",
        lastName: "Lante",
        phone: "432-180-0392",
        address: "26986 Sycamore Point",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "775a5552-b549-4d34-be4a-17e0db366a8c",
          condition:
            "Nondisplaced fracture of shaft of fifth metacarpal bone, left hand, initial encounter for closed fracture",
          dateDiagnosed: "7/17/2024",
          treatment: "Minoxidil",
        },
      ],
    },
    doctorId: "690f41af-776f-44a9-9878-0f4bc4d29f1a",
    date: getRandomDate(),
    time: "11:07 AM",
    status: "rejected",
    reason: "Cardiology consultation",
  },
  {
    id: "b566767c-f9d0-4cea-939a-b0693b37e6dd",
    patient: {
      id: "d9960109-0e92-47bc-b34b-483eb39aaf52",
      email: "kmckibben1l@fc2.com",
      profile: {
        firstName: "Kerwinn",
        lastName: "McKibben",
        phone: "240-928-6174",
        address: "268 Division Road",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "13420c96-d4d0-453d-ac44-d6818f764d56",
          condition:
            "Nondisplaced fracture of fourth metatarsal bone, unspecified foot, initial encounter for closed fracture",
          dateDiagnosed: "10/1/2024",
          treatment:
            "Acetaminophen, Dextromethorphan HBr, Doxylamine succinate",
        },
      ],
    },
    doctorId: "5bdf2e0a-a63d-4065-b5f8-a45c596b253d",
    date: getRandomDate(),
    time: "4:47 PM",
    status: "accepted",
    reason: "Pregnancy confirmation",
  },
  {
    id: "3fb165fb-d222-47bc-8436-21f5aa9b3617",
    patient: {
      id: "147a2ada-3197-47df-9f68-8925329235d9",
      email: "tlympany1m@nydailynews.com",
      profile: {
        firstName: "Tarrance",
        lastName: "Lympany",
        phone: "571-379-1284",
        address: "84 Superior Avenue",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "3af1ec3f-1f15-47ef-b6fb-5177d3fdd9b5",
          condition:
            "Other specified injury of ulnar artery at wrist and hand level of right arm, initial encounter",
          dateDiagnosed: "6/2/2024",
          treatment: "OCTINOXATE, TITANIUM DIOXIDE, and ZINC OXIDE",
        },
      ],
    },
    doctorId: "d86f9a66-fa10-4830-9b94-add82b62ac90",
    date: getRandomDate(),
    time: "10:07 AM",
    status: "pending",
    reason: "Post-operative follow-up",
  },
  {
    id: "4e7cb204-d179-46e1-8395-cc90b5d3fae0",
    patient: {
      id: "f8c12570-1bf2-4e08-9b02-7ad0b76d510f",
      email: "degre1n@wikia.com",
      profile: {
        firstName: "Dion",
        lastName: "Egre",
        phone: "532-614-8826",
        address: "5401 Esch Plaza",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "cc277989-fe02-44b0-b4a9-d7a5426e46c8",
          condition: "Gout due to renal impairment, unspecified ankle and foot",
          dateDiagnosed: "3/3/2024",
          treatment: "Botrytis cinerea",
        },
      ],
    },
    doctorId: "b098f5ce-fbea-435c-9bcf-5f662337a8fa",
    date: getRandomDate(),
    time: "8:54 AM",
    status: "accepted",
    reason: "Pre-operative assessment",
  },
  {
    id: "25172153-ecc4-401a-8ee1-56e3aa4b83c5",
    patient: {
      id: "4d7906e6-cfb1-4af4-b361-a19c04179e1e",
      email: "fskivington1o@addtoany.com",
      profile: {
        firstName: "Fallon",
        lastName: "Skivington",
        phone: "924-581-4364",
        address: "0 Gale Way",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "410c74a1-a19c-445f-b1f6-c9e4014db723",
          condition:
            "Poisoning by local antifungal, anti-infective and anti-inflammatory drugs, intentional self-harm, subsequent encounter",
          dateDiagnosed: "6/26/2024",
          treatment: "KALI SULPHURICUM",
        },
      ],
    },
    doctorId: "093c4c27-73f9-4f11-8246-f3d7b5e1c784",
    date: getRandomDate(),
    time: "8:00 PM",
    status: "pending",
    reason: "Cardiology consultation",
  },
  {
    id: "ba2ecddb-04a5-4644-91e5-1a92c37c71f2",
    patient: {
      id: "56700b85-cbc0-40a7-9f46-abeaa1b7ebcf",
      email: "vinggall1p@issuu.com",
      profile: {
        firstName: "Vittorio",
        lastName: "Inggall",
        phone: "353-956-9761",
        address: "39 Pierstorff Lane",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "3194edab-dfe1-40e0-885c-442d295e491e",
          condition: "Polyp of vagina",
          dateDiagnosed: "12/19/2024",
          treatment: "BENZETHONIUM CHLORIDE",
        },
      ],
    },
    doctorId: "afae6ea9-c003-4eb6-928a-900b57fd0f11",
    date: getRandomDate(),
    time: "3:43 AM",
    status: "pending",
    reason: "Dermatology consultation",
  },
  {
    id: "02912623-614d-48cc-b214-2ba7403d2801",
    patient: {
      id: "3d8ace78-3912-4623-8b93-b41a9d83de8d",
      email: "imcrobbie1q@webeden.co.uk",
      profile: {
        firstName: "Indira",
        lastName: "McRobbie",
        phone: "431-456-1931",
        address: "925 La Follette Street",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "2e0ddc9a-a4c4-46de-a03c-967c0711a9ff",
          condition: "Exposure to sunlight, initial encounter",
          dateDiagnosed: "6/24/2024",
          treatment: "naloxone hydrochloride",
        },
      ],
    },
    doctorId: "4294406d-531c-44dd-9924-4a6877970204",
    date: getRandomDate(),
    time: "7:56 PM",
    status: "accepted",
    reason: "Chronic disease management",
  },
  {
    id: "96b61c21-8c59-4e74-8735-07ebed7a589a",
    patient: {
      id: "f3be7ced-58cf-4a38-8e0c-e9f30353aedc",
      email: "civakhnov1r@ebay.com",
      profile: {
        firstName: "Chev",
        lastName: "Ivakhnov",
        phone: "517-887-7406",
        address: "11848 Northridge Junction",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "df46faa3-1d87-48be-b1e4-4d3d1d9dde05",
          condition:
            "Person on outside of pick-up truck or van injured in collision with pedestrian or animal in nontraffic accident",
          dateDiagnosed: "7/3/2024",
          treatment: "Neomycin, Polymyxin B Sulfates, Dexamethasone",
        },
      ],
    },
    doctorId: "dc8c16aa-1c2e-42ba-ae6b-6555b7e10d3a",
    date: getRandomDate(),
    time: "7:25 AM",
    status: "accepted",
    reason: "Consultation for new symptoms",
  },
  {
    id: "da8f56e5-4d3e-4bb7-a9e2-6ac694043439",
    patient: {
      id: "740eafe3-f0e9-4f0c-826b-720e0279216c",
      email: "astubbin1s@goodreads.com",
      profile: {
        firstName: "Antony",
        lastName: "Stubbin",
        phone: "582-272-4750",
        address: "77 Di Loreto Drive",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "0da7ced0-de09-4871-86b8-c2b8dc7d8d94",
          condition: "Underdosing of barbiturates",
          dateDiagnosed: "12/31/2024",
          treatment: "benzocaine and glycerin",
        },
      ],
    },
    doctorId: "fa35eb4b-4c1d-41bd-9a9d-0b3785f8dacf",
    date: getRandomDate(),
    time: "12:48 AM",
    status: "accepted",
    reason: "Consultation for new symptoms",
  },
  {
    id: "80c1930f-b7a6-4c55-8752-dfe7f12e8455",
    patient: {
      id: "9aab904c-f272-4137-8e4c-ac134eb64ca8",
      email: "ahowlings1t@japanpost.jp",
      profile: {
        firstName: "Annora",
        lastName: "Howlings",
        phone: "587-167-2103",
        address: "26322 Sachs Lane",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "7893098f-2259-4d8b-9ebf-7b5323382bec",
          condition: "Tuberculosis of other specified organs",
          dateDiagnosed: "7/2/2024",
          treatment:
            "Dexchlorpheniramine Maleate and Pseudoephedrine Hydrochloride",
        },
      ],
    },
    doctorId: "56e16a19-a5c0-4a21-9b76-90bca8411c32",
    date: getRandomDate(),
    time: "3:46 PM",
    status: "pending",
    reason: "Pregnancy confirmation",
  },
  {
    id: "de1d52aa-8afa-466e-b915-ac9611cb7c77",
    patient: {
      id: "dbe87e72-a8ab-44b1-83c0-165da5db3316",
      email: "vhutten1u@woothemes.com",
      profile: {
        firstName: "Viv",
        lastName: "Hutten",
        phone: "476-189-1512",
        address: "42220 Fulton Pass",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "dde44961-0175-4b0a-bf72-eea46c350cba",
          condition:
            "Unspecified nondisplaced fracture of second cervical vertebra, initial encounter for closed fracture",
          dateDiagnosed: "7/29/2024",
          treatment: "KETOROLAC TROMETHAMINE",
        },
      ],
    },
    doctorId: "dd7bffeb-f3c5-45ba-8fb7-94853b7388e9",
    date: getRandomDate(),
    time: "12:41 PM",
    status: "pending",
    reason: "Chronic disease management",
  },
  {
    id: "ebff55cc-3e2a-45f8-964f-27f5f03ed52c",
    patient: {
      id: "2be9839c-0140-4468-ab77-196a0786e8a6",
      email: "mcristofor1v@nasa.gov",
      profile: {
        firstName: "Mirelle",
        lastName: "Cristofor",
        phone: "965-158-4058",
        address: "7373 Nelson Park",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "b6725a03-0180-49eb-ad45-823e5fd14906",
          condition: "Primary open-angle glaucoma, bilateral, mild stage",
          dateDiagnosed: "10/27/2024",
          treatment: "Octinoxate, Titanium Dioxide, and Zinc Oxide",
        },
      ],
    },
    doctorId: "7f9671de-ac94-474f-aa97-56b522636806",
    date: getRandomDate(),
    time: "5:18 AM",
    status: "rejected",
    reason: "Follow-up visit",
  },
  {
    id: "eaaf3d19-a4cd-4fc6-9394-ee7dcf235af2",
    patient: {
      id: "9fe89983-60f5-47ed-b434-da03e9c2570f",
      email: "gdemann1w@ezinearticles.com",
      profile: {
        firstName: "Ginevra",
        lastName: "Demann",
        phone: "213-646-3875",
        address: "33720 Hoard Crossing",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "08083d88-36e1-4daa-abee-4d3fc54bae53",
          condition: "Hematospermia",
          dateDiagnosed: "5/14/2024",
          treatment:
            ".BETA.-CAROTENE, VITAMIN A ACETATE, ASCORBIC ACID, CHOLECALCIFEROL, .ALPHA.-TOCOPHEROL ACETATE, DL-, Thiamine Mononitrate, Riboflavin, NIACINAMIDE, Pyridoxine Hydrochloride, Folic Acid, LEVOMEFOLATE CALCIUM, Cobalamin, Iron, MAGNESIUM OXIDE, ZINC OXIDE, and DOCONEXANT",
        },
      ],
    },
    doctorId: "5ece6648-4199-45ee-b4a9-603f1d3c3a5a",
    date: getRandomDate(),
    time: "12:33 PM",
    status: "accepted",
    reason: "Pregnancy confirmation",
  },
  {
    id: "e94fe7c9-ac89-43e7-9a46-6861c6fd4c67",
    patient: {
      id: "0f43caad-20e2-4d67-be8f-268232975286",
      email: "pcawdron1x@over-blog.com",
      profile: {
        firstName: "Piotr",
        lastName: "Cawdron",
        phone: "429-122-8387",
        address: "6341 Wayridge Point",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "674c8948-f957-408f-b7cd-83c920802b38",
          condition: "Major laceration of internal jugular vein",
          dateDiagnosed: "12/30/2024",
          treatment: "Psyllium husk",
        },
      ],
    },
    doctorId: "8f070298-7ff2-4504-ba40-71928774b65c",
    date: getRandomDate(),
    time: "4:35 AM",
    status: "accepted",
    reason: "Pregnancy confirmation",
  },
  {
    id: "32f3bf81-3e0b-4f25-8235-fd259feb24bf",
    patient: {
      id: "d99f4050-38d9-4a76-8086-d979154eaa42",
      email: "dtrayes1y@marriott.com",
      profile: {
        firstName: "Donnie",
        lastName: "Trayes",
        phone: "499-885-7870",
        address: "93 Briar Crest Drive",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "2469d62f-057f-476b-8699-f6da9161c18c",
          condition:
            "Unspecified injury of axillary artery, left side, subsequent encounter",
          dateDiagnosed: "10/3/2024",
          treatment: "METHYL SALICYLATE",
        },
      ],
    },
    doctorId: "bf901476-2146-426e-bde3-59cb4f26b429",
    date: getRandomDate(),
    time: "9:15 PM",
    status: "rejected",
    reason: "Post-operative follow-up",
  },
  {
    id: "fc9b22d9-bcb1-4eac-ae24-d395a1edd75e",
    patient: {
      id: "2158785b-fce8-4978-bb58-498a1b3ca1e6",
      email: "lalelsandrowicz1z@eepurl.com",
      profile: {
        firstName: "Layney",
        lastName: "Alelsandrowicz",
        phone: "695-179-2356",
        address: "540 Hovde Plaza",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "93b9e006-05e5-4ae8-aba1-39cda0592f91",
          condition: "Unspecified optic atrophy",
          dateDiagnosed: "8/27/2024",
          treatment: "Acetaminophen, Caffeine and Pyrilamine maleate",
        },
      ],
    },
    doctorId: "02523d53-b43b-483b-86fe-50b254fae625",
    date: getRandomDate(),
    time: "2:33 PM",
    status: "accepted",
    reason: "Routine check-up",
  },
  {
    id: "e693e9b1-cfef-46ad-a32d-4f66e8862a2f",
    patient: {
      id: "09470ac0-2988-43d4-9eff-6f6877f0c9b4",
      email: "ebarts20@cafepress.com",
      profile: {
        firstName: "Erin",
        lastName: "Barts",
        phone: "963-685-8116",
        address: "3056 Tennessee Street",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "282a1858-4c42-4858-8042-c3864ce77579",
          condition:
            "Injury of unspecified nerve at wrist and hand level of left arm, initial encounter",
          dateDiagnosed: "8/29/2024",
          treatment: "Artemisia absinthium",
        },
      ],
    },
    doctorId: "bded4e50-6221-45ec-8ec7-6b8936457249",
    date: getRandomDate(),
    time: "6:38 PM",
    status: "rejected",
    reason: "Follow-up visit",
  },
  {
    id: "571a2c59-e5d1-4f66-a42d-4a9d3a724902",
    patient: {
      id: "b2625ed6-c42d-4758-99bc-607cb6f2cf23",
      email: "jyankin21@google.de",
      profile: {
        firstName: "Judas",
        lastName: "Yankin",
        phone: "370-383-0302",
        address: "188 Annamark Park",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "36f6feda-5415-40c8-84c2-fb235b28900f",
          condition:
            "Displaced fracture of medial wall of unspecified acetabulum, initial encounter for closed fracture",
          dateDiagnosed: "10/4/2024",
          treatment: "TITANIUM DIOXIDE and OCTINOXATE",
        },
      ],
    },
    doctorId: "66bb98ad-392c-4789-88fa-6ae8addb1574",
    date: getRandomDate(),
    time: "10:28 AM",
    status: "accepted",
    reason: "Pediatric check-up",
  },
  {
    id: "a5167e9a-de4a-4840-8c9e-9a75bda5e408",
    patient: {
      id: "2fe2defe-19c6-456e-8588-3d50cb329451",
      email: "rhaffenden22@businessinsider.com",
      profile: {
        firstName: "Rosette",
        lastName: "Haffenden",
        phone: "237-318-0346",
        address: "499 Stoughton Parkway",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "602fb1b4-da96-44f9-b23f-86909ef8739a",
          condition:
            "Corrosion of first degree of unspecified single finger (nail) except thumb",
          dateDiagnosed: "12/2/2024",
          treatment: "Softgel",
        },
      ],
    },
    doctorId: "9c18c2b6-1ab9-4799-9054-4563e0c95d74",
    date: getRandomDate(),
    time: "1:11 AM",
    status: "rejected",
    reason: "Lab test results discussion",
  },
  {
    id: "cd6f6eca-09f3-4f20-9d7f-4ec447d0e34f",
    patient: {
      id: "d5f40eb4-b5cc-4c93-b696-30c6b195e28e",
      email: "vsixsmith23@sourceforge.net",
      profile: {
        firstName: "Valera",
        lastName: "Sixsmith",
        phone: "616-707-9120",
        address: "9227 Moland Street",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "4a313be5-9681-46c5-80cf-4cbb18918b9a",
          condition:
            "Strain of extensor muscle, fascia and tendon of right middle finger at wrist and hand level, sequela",
          dateDiagnosed: "12/28/2024",
          treatment: "OCTINOXATE, TITANIUM DIOXIDE",
        },
      ],
    },
    doctorId: "20b19cd6-89ae-473a-aad9-20b9383f48fc",
    date: getRandomDate(),
    time: "10:30 AM",
    status: "pending",
    reason: "Diabetes management",
  },
  {
    id: "ee5b3696-d052-440c-9e7d-8237e34fbfa2",
    patient: {
      id: "b178d372-6308-4bac-9cf6-f112ee90ad91",
      email: "elevett24@weather.com",
      profile: {
        firstName: "Erin",
        lastName: "Levett",
        phone: "438-826-3299",
        address: "5 Cordelia Road",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "8ba3c07b-0992-4726-a01f-1c7f5ca2b852",
          condition:
            "Other fracture of second metacarpal bone, left hand, subsequent encounter for fracture with malunion",
          dateDiagnosed: "5/13/2024",
          treatment: "Doxycycline Hyclate",
        },
      ],
    },
    doctorId: "3cfecee6-6702-4807-b493-12a2941bf8ae",
    date: getRandomDate(),
    time: "6:41 AM",
    status: "accepted",
    reason: "Post-operative follow-up",
  },
  {
    id: "48ec189f-b9df-4125-aae4-2b1e4a582717",
    patient: {
      id: "2bfdc0a7-6b56-4a2f-b253-d91856f37077",
      email: "kkimmince25@google.com.br",
      profile: {
        firstName: "Kerstin",
        lastName: "Kimmince",
        phone: "735-544-6425",
        address: "79637 Hooker Road",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "3061f14a-d70a-4f2a-aa1c-a6f1499d7297",
          condition:
            "Legal intervention involving injury by tear gas, suspect injured",
          dateDiagnosed: "4/21/2024",
          treatment: "Nabumetone",
        },
      ],
    },
    doctorId: "d6dd8ddf-4442-440f-a71f-f15910cf8a7b",
    date: getRandomDate(),
    time: "9:30 PM",
    status: "rejected",
    reason: "Weight management",
  },
  {
    id: "63ab4031-aa9e-4e45-8042-fe5e0e7923ba",
    patient: {
      id: "b80d0b2d-e979-4c62-ba2e-f0c2a4bfd8ca",
      email: "afree26@adobe.com",
      profile: {
        firstName: "Aldon",
        lastName: "Free",
        phone: "446-188-7597",
        address: "489 Twin Pines Terrace",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "921478b7-4fe3-4e9c-854e-f3c2f853a031",
          condition:
            "Passenger in pick-up truck or van injured in collision with pedal cycle in nontraffic accident, subsequent encounter",
          dateDiagnosed: "3/13/2024",
          treatment: "Ketotifen Fumarate",
        },
      ],
    },
    doctorId: "3ea0cc00-419b-4e05-86c9-cf889a071c6d",
    date: getRandomDate(),
    time: "2:21 AM",
    status: "rejected",
    reason: "Geriatric care",
  },
  {
    id: "06e3fc2b-5690-4f17-b3d7-2615ad9e2f06",
    patient: {
      id: "32ea0a01-073b-428f-b9ae-7e71d7a10432",
      email: "mdorrins27@prnewswire.com",
      profile: {
        firstName: "Mabelle",
        lastName: "Dorrins",
        phone: "383-635-2435",
        address: "6142 Kennedy Crossing",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "8c140c9c-5edf-4700-b8c7-a2d927b00b6d",
          condition:
            "Intraoperative hemorrhage and hematoma of eye and adnexa complicating other procedure",
          dateDiagnosed: "3/10/2024",
          treatment: "Anticoagulant Sodium Citrate Solution",
        },
      ],
    },
    doctorId: "eb518824-0bea-43b3-84d4-47d9f4a7035b",
    date: getRandomDate(),
    time: "12:59 PM",
    status: "rejected",
    reason: "Lab test results discussion",
  },
  {
    id: "a2049913-58c1-437a-949c-f124c908a37f",
    patient: {
      id: "86f6d9b4-271d-4ac1-92b6-cf44713ae2c8",
      email: "fchalcroft28@ezinearticles.com",
      profile: {
        firstName: "Frederich",
        lastName: "Chalcroft",
        phone: "108-447-1947",
        address: "076 Saint Paul Circle",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "91be01de-42ba-48d5-bb45-4023222e7a64",
          condition:
            "Unspecified complication of genitourinary prosthetic device, implant and graft, sequela",
          dateDiagnosed: "9/6/2024",
          treatment: "Promethazine hydrochloride",
        },
      ],
    },
    doctorId: "97194458-40eb-4828-85fe-7ee5ecdf398a",
    date: getRandomDate(),
    time: "4:29 AM",
    status: "pending",
    reason: "Annual physical exam",
  },
  {
    id: "7ee48824-91a3-481e-aaaa-a01046069033",
    patient: {
      id: "66445dd8-d404-49d1-9e94-042ca9fd9bb3",
      email: "ccavill29@sina.com.cn",
      profile: {
        firstName: "Carolus",
        lastName: "Cavill",
        phone: "283-152-8845",
        address: "63067 Karstens Parkway",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "578fa51d-7ca4-4ae6-9ca7-67008ef3eb04",
          condition:
            "Salter-Harris Type III physeal fracture of lower end of radius, left arm, sequela",
          dateDiagnosed: "12/27/2024",
          treatment: "Ranitidine",
        },
      ],
    },
    doctorId: "150672b4-0090-4889-8294-ccf6494bc0e5",
    date: getRandomDate(),
    time: "4:25 PM",
    status: "rejected",
    reason: "Routine check-up",
  },
  {
    id: "6debbc69-4f6a-40f4-ac31-530221dd70b7",
    patient: {
      id: "e6b80422-04ed-4dde-b0d3-b5e9ab29271a",
      email: "djiras2a@123-reg.co.uk",
      profile: {
        firstName: "Davin",
        lastName: "Jiras",
        phone: "648-531-0435",
        address: "6 Merrick Junction",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "04123cf0-e9b0-4d6c-85b6-99edf3f9e8e5",
          condition:
            "Unspecified injury of adductor muscle, fascia and tendon of unspecified thigh, subsequent encounter",
          dateDiagnosed: "11/24/2024",
          treatment:
            "Dextrose Monohydrate, Sodium Chloride, Calcium Chloride, Magnesium Chloride, Sodium Lactate",
        },
      ],
    },
    doctorId: "5a52c701-df69-444e-8685-6b0c0da10b00",
    date: getRandomDate(),
    time: "2:50 AM",
    status: "accepted",
    reason: "Asthma management",
  },
  {
    id: "9b91aa15-63d3-44bc-a925-d12a0bd9c88a",
    patient: {
      id: "3c1c2d5b-d048-40a6-bae3-a9d11cb4c88a",
      email: "vcantrill2b@godaddy.com",
      profile: {
        firstName: "Venita",
        lastName: "Cantrill",
        phone: "111-181-6296",
        address: "74459 Grover Avenue",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "1f445809-45ee-4cff-81b9-b0a24b36ea6e",
          condition:
            "Other fracture of right ilium, subsequent encounter for fracture with delayed healing",
          dateDiagnosed: "12/7/2024",
          treatment: "azelaic acid",
        },
      ],
    },
    doctorId: "89b621b1-b630-4fc6-9626-ef11acc29b77",
    date: getRandomDate(),
    time: "8:10 PM",
    status: "accepted",
    reason: "Routine check-up",
  },
  {
    id: "83b8700e-b20c-4751-bd59-fb1d6d2b934b",
    patient: {
      id: "ff833a4c-1222-4293-b5c8-1cdbac02434a",
      email: "hlaurand2c@time.com",
      profile: {
        firstName: "Hogan",
        lastName: "Laurand",
        phone: "806-263-8312",
        address: "2715 Atwood Road",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "914ae9e0-7c1f-4bdf-80b3-516b927fe4ec",
          condition:
            "Dislocation of T9/T10 thoracic vertebra, subsequent encounter",
          dateDiagnosed: "11/22/2024",
          treatment: "White Poplar",
        },
      ],
    },
    doctorId: "a6eb98a8-cc1d-4dab-b139-198d13a94914",
    date: getRandomDate(),
    time: "5:00 AM",
    status: "accepted",
    reason: "Follow-up visit",
  },
  {
    id: "fa6037f9-b254-4bac-a8c0-e4262e7873d4",
    patient: {
      id: "f54c1b2c-b9ce-48a6-bbe0-f69c24077352",
      email: "iolyonov2d@jimdo.com",
      profile: {
        firstName: "Irina",
        lastName: "Olyonov",
        phone: "375-307-5876",
        address: "748 Di Loreto Junction",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "9d19f87e-458e-4057-8216-b9d65dd89f53",
          condition: "Other injury of spleen, sequela",
          dateDiagnosed: "1/22/2024",
          treatment: "nicotine polacrilex",
        },
      ],
    },
    doctorId: "08996e13-8a65-4e5f-a637-475d1da3d31c",
    date: getRandomDate(),
    time: "2:51 AM",
    status: "rejected",
    reason: "Pregnancy confirmation",
  },
  {
    id: "d134d9c8-f81e-4726-a64e-c757062dfbb7",
    patient: {
      id: "53eb364d-7802-4ace-b009-f39ce0cfba34",
      email: "pbrach2e@home.pl",
      profile: {
        firstName: "Padgett",
        lastName: "Brach",
        phone: "171-279-0566",
        address: "2348 Sloan Court",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "9a9c7009-ea75-4500-98ee-35472ca6eb40",
          condition: "Synovitis and tenosynovitis",
          dateDiagnosed: "4/5/2024",
          treatment: "Lambs Quarters",
        },
      ],
    },
    doctorId: "4d92d2fd-fdee-492b-a420-d991b38dcc35",
    date: getRandomDate(),
    time: "5:31 AM",
    status: "rejected",
    reason: "Sports physical",
  },
  {
    id: "322dcd05-11a4-4d42-8c23-aee40defab2b",
    patient: {
      id: "6f103626-fee5-42b0-a87e-73ebe0ac7456",
      email: "cellacott2f@csmonitor.com",
      profile: {
        firstName: "Corrina",
        lastName: "Ellacott",
        phone: "527-270-9169",
        address: "132 Golf View Drive",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "de4a492e-da30-49b0-8bf9-8cb5c939be23",
          condition:
            "Dislocation of midcarpal joint of unspecified wrist, sequela",
          dateDiagnosed: "12/30/2024",
          treatment: "Amlodipine besylate and Atorvastatin calcium",
        },
      ],
    },
    doctorId: "32ab393d-d0e5-4fee-8072-8a94aae9e942",
    date: getRandomDate(),
    time: "10:10 PM",
    status: "accepted",
    reason: "Hypertension management",
  },
  {
    id: "5fe85557-9d62-4a3b-8150-7ef5d80a503a",
    patient: {
      id: "16285a4f-d65e-4730-9fc7-e3de864d73c8",
      email: "nstilling2g@sina.com.cn",
      profile: {
        firstName: "Nisse",
        lastName: "Stilling",
        phone: "809-349-6024",
        address: "745 Moulton Junction",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "d39b1b10-cdbb-4e50-b30d-d96e202dbafb",
          condition:
            "Partial traumatic amputation at right shoulder joint, subsequent encounter",
          dateDiagnosed: "1/30/2024",
          treatment: "Pyrithione Zinc",
        },
      ],
    },
    doctorId: "d19119a3-f42e-4274-949f-f5e041166b49",
    date: getRandomDate(),
    time: "1:57 AM",
    status: "rejected",
    reason: "Nutritional advice",
  },
  {
    id: "986bbc43-45a3-4ebd-951b-8917500cd29b",
    patient: {
      id: "1b0f988b-e53a-429e-9dec-096323ea1e87",
      email: "hgumly2h@addthis.com",
      profile: {
        firstName: "Henrik",
        lastName: "Gumly",
        phone: "658-985-0081",
        address: "3467 Green Ridge Road",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "11936979-5608-4371-9208-41d2440e7fcb",
          condition:
            "Other fracture of shaft of radius, left arm, initial encounter for closed fracture",
          dateDiagnosed: "5/29/2024",
          treatment: "LIDOCAINE",
        },
      ],
    },
    doctorId: "f9bd1f66-0e26-46ae-8f88-3da1d0801757",
    date: getRandomDate(),
    time: "8:33 PM",
    status: "accepted",
    reason: "Mental health consultation",
  },
  {
    id: "5378589e-472f-4ae5-8656-0d29908d9e6a",
    patient: {
      id: "0dae0e98-3879-4cc1-9fd9-7bf2d3bbe897",
      email: "svaux2i@geocities.com",
      profile: {
        firstName: "Suzann",
        lastName: "Vaux",
        phone: "161-445-0749",
        address: "2 Petterle Circle",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "bc92f073-579a-4155-9636-3717ab8616cc",
          condition:
            "Nondisplaced fracture of lower epiphysis (separation) of unspecified femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
          dateDiagnosed: "11/14/2024",
          treatment: "SALICYLIC ACID",
        },
      ],
    },
    doctorId: "3106948f-8e09-4ed7-99fa-0c2f979df0b3",
    date: getRandomDate(),
    time: "11:38 AM",
    status: "accepted",
    reason: "Cardiology consultation",
  },
  {
    id: "c8c940e4-9a4f-44e1-a262-5317a1e7218a",
    patient: {
      id: "65edd888-7d93-4af6-ac6e-9421905995cf",
      email: "eminguet2j@nydailynews.com",
      profile: {
        firstName: "Earl",
        lastName: "Minguet",
        phone: "170-136-0817",
        address: "4 Parkside Avenue",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "b275e5f6-f8cf-440f-ad59-dee487e9c5a6",
          condition: "Burn of second degree of abdominal wall, sequela",
          dateDiagnosed: "10/30/2024",
          treatment: "Pyrithione Zinc",
        },
      ],
    },
    doctorId: "40032a7a-2c78-4460-a9c8-89491440f3e7",
    date: getRandomDate(),
    time: "1:20 AM",
    status: "rejected",
    reason: "Routine check-up",
  },
  {
    id: "fc39aa62-1e33-418c-97ce-e15f84045462",
    patient: {
      id: "ef4f7022-7405-4375-8aa5-bddc3906a314",
      email: "rnavan2k@tuttocitta.it",
      profile: {
        firstName: "Ramon",
        lastName: "Navan",
        phone: "917-630-2607",
        address: "27504 Loeprich Junction",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "c755ab23-6c2e-4f05-9c3a-979c3fd833b0",
          condition:
            "Contact with other sharp object(s), not elsewhere classified, subsequent encounter",
          dateDiagnosed: "12/4/2024",
          treatment: "Isopropyl Alcohol",
        },
      ],
    },
    doctorId: "d55e537c-7e5d-4ae7-af83-b0ba7125cddf",
    date: getRandomDate(),
    time: "8:44 PM",
    status: "accepted",
    reason: "Prescription refill",
  },
  {
    id: "1721ac3f-be26-4145-950b-c7f67a1724dc",
    patient: {
      id: "cd6881a3-a873-4ed0-bef9-db2e6e43dfbb",
      email: "pprosch2l@weather.com",
      profile: {
        firstName: "Perrine",
        lastName: "Prosch",
        phone: "933-722-7233",
        address: "0827 Northwestern Center",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "86b518f0-da79-4942-8491-121737332caf",
          condition: "Burn of second degree of buttock",
          dateDiagnosed: "1/18/2024",
          treatment: "Titanium dioxide",
        },
      ],
    },
    doctorId: "657e7a53-41c5-4c4b-9e5b-26d36ec21856",
    date: getRandomDate(),
    time: "3:44 AM",
    status: "accepted",
    reason: "Dermatology consultation",
  },
  {
    id: "3d8c4be6-56cc-4a1e-9ce6-06178eb08c37",
    patient: {
      id: "799d0184-f687-43ec-8a85-12b0c8c3827c",
      email: "wdivis2m@google.com.br",
      profile: {
        firstName: "Winnifred",
        lastName: "Divis",
        phone: "213-810-8153",
        address: "65 Buena Vista Court",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "36ad7f9d-c897-4735-93a8-36fa24ed185b",
          condition:
            "Nondisplaced subtrochanteric fracture of left femur, sequela",
          dateDiagnosed: "12/12/2024",
          treatment: "GEMCITABINE HYDROCHLORIDE",
        },
      ],
    },
    doctorId: "024a2fdd-41f1-4af0-a48b-dd1f2b4141a3",
    date: getRandomDate(),
    time: "7:22 AM",
    status: "pending",
    reason: "Chronic disease management",
  },
  {
    id: "ae1ef3ff-d571-4a5e-b333-8bcee0f0a6b1",
    patient: {
      id: "19cc1d86-6556-478e-a8bf-1f2b832573c4",
      email: "fburford2n@fc2.com",
      profile: {
        firstName: "Foss",
        lastName: "Burford",
        phone: "871-824-2620",
        address: "1 Ridge Oak Avenue",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "afdeb9b7-645a-4cd8-b8ff-b5a3d05461c7",
          condition:
            "Occupant of railway train or railway vehicle injured in transport accident",
          dateDiagnosed: "5/18/2024",
          treatment: "ALUMINUM CHLOROHYDRATE",
        },
      ],
    },
    doctorId: "b5b578bd-6dd4-4225-8c58-3f500f425cc0",
    date: getRandomDate(),
    time: "6:40 PM",
    status: "rejected",
    reason: "Respiratory consultation",
  },
  {
    id: "a06c63e0-4a95-4af0-8fad-90cd1543c764",
    patient: {
      id: "5d3d57fe-4a82-4466-a9e9-cdd64c590e00",
      email: "ldearness2o@networksolutions.com",
      profile: {
        firstName: "Louise",
        lastName: "Dearness",
        phone: "391-879-5324",
        address: "0742 Lukken Point",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "f2a4602d-f09f-4d7f-bc25-6d66c66a6316",
          condition: "Leakage of aortic (bifurcation) graft (replacement)",
          dateDiagnosed: "1/6/2024",
          treatment: "Titanium Dioxide",
        },
      ],
    },
    doctorId: "ae215e19-5d2f-4ba3-a0ab-c855a9728aa6",
    date: getRandomDate(),
    time: "6:50 PM",
    status: "rejected",
    reason: "Dermatology consultation",
  },
  {
    id: "c4f0e116-bc60-4137-b74d-1ebd31eac68e",
    patient: {
      id: "188d18b2-f272-4713-93e7-930dc4052357",
      email: "ttarpey2p@fotki.com",
      profile: {
        firstName: "Torey",
        lastName: "Tarpey",
        phone: "672-377-9717",
        address: "5932 Oxford Parkway",
        dateOfBirth: getRandomDate(),
        gender: "Male",
      },
      medicalHistory: [
        {
          id: "0fb1c473-810d-4532-b28c-e6a0a32ec002",
          condition: "Bitten by dolphin, sequela",
          dateDiagnosed: "10/18/2024",
          treatment: "Diltiazem Hydrochloride",
        },
      ],
    },
    doctorId: "85779564-9644-421b-9753-bf750f7eea75",
    date: getRandomDate(),
    time: "2:42 AM",
    status: "accepted",
    reason: "Injury evaluation",
  },
  {
    id: "4230e674-cd2a-4345-b241-b89f9d126015",
    patient: {
      id: "44898417-7913-4acb-ab5b-597819852f07",
      email: "ifrancecione2q@1688.com",
      profile: {
        firstName: "Ingeberg",
        lastName: "Francecione",
        phone: "149-830-7432",
        address: "5 Sachtjen Terrace",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "58737cf4-48dd-47cb-af45-bc1c5c2c8101",
          condition:
            "Partial traumatic amputation at level between knee and ankle, left lower leg",
          dateDiagnosed: "6/3/2024",
          treatment: "Telmisartan",
        },
      ],
    },
    doctorId: "1e3d6e2b-7496-4ce9-a4b8-ad6b54f2e64f",
    date: getRandomDate(),
    time: "4:28 PM",
    status: "rejected",
    reason: "Sports physical",
  },
  {
    id: "e6150eb9-7919-4742-984b-7882738a213b",
    patient: {
      id: "83706a96-a5e7-4df6-a612-d3e1fa467be5",
      email: "pblitz2r@nyu.edu",
      profile: {
        firstName: "Pier",
        lastName: "Blitz",
        phone: "148-707-7491",
        address: "7119 Pepper Wood Place",
        dateOfBirth: getRandomDate(),
        gender: "Female",
      },
      medicalHistory: [
        {
          id: "0fd42046-8231-401d-a428-c134f5deafe1",
          condition: "Other infective bursitis, ankle and foot",
          dateDiagnosed: "7/25/2024",
          treatment:
            "avobenzone, homosalate, octisalate, octocrylene, oxybenzone",
        },
      ],
    },
    doctorId: "25a9669e-3588-476d-9175-062d118009a1",
    date: getRandomDate(),
    time: "12:06 AM",
    status: "pending",
    reason: "Sexual health consultation",
  },
];

const fakeMessages: Message[] = [
  {
    id: "m1",
    content: "Hello, I have a question about my medication.",
    senderId: fakePatients[0].id,
    receiverId: fakeDoctors[0].id,
    timestamp: "2024-06-23T15:30:00Z",
  },
  {
    id: "m2",
    content: "Can I reschedule my appointment?",
    senderId: fakePatients[1].id,
    receiverId: fakeDoctors[1].id,
    timestamp: "2024-06-24T10:00:00Z",
  },
  {
    id: "m3",
    content: "Your test results are available.",
    senderId: fakeDoctors[0].id,
    receiverId: fakePatients[0].id,
    timestamp: "2024-06-25T08:45:00Z",
  },
];

const fakeChats: Chat[] = [
  {
    id: "chat1",
    patientId: fakePatients[0].id,
    timestamp: "2024-06-25T08:45:00Z",
    messages: [
      {
        id: "m1",
        content: "Hello, I have a question about my medication.",
        senderId: fakePatients[0].id,
        receiverId: fakeDoctors[0].id,
        timestamp: "2024-06-23T15:30:00Z",
      },
      {
        id: "m3",
        content: "Your test results are available.",
        senderId: fakeDoctors[0].id,
        receiverId: fakePatients[0].id,
        timestamp: "2024-06-25T08:45:00Z",
      },
    ],
  },
  {
    id: "chat2",
    patientId: fakePatients[1].id,
    timestamp: "2024-06-24T10:00:00Z",
    messages: [
      {
        id: "m2",
        content: "Can I reschedule my appointment?",
        senderId: fakePatients[1].id,
        receiverId: fakeDoctors[1].id,
        timestamp: "2024-06-24T10:00:00Z",
      },
    ],
  },
];

export { fakeDoctors, fakePatients, fakeAppointments, fakeMessages, fakeChats };
