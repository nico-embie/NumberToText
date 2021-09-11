import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import { convertNumberToText } from "../util/numberToText";
import { ClipboardCopyIcon } from "@heroicons/react/outline";
import _ from "lodash";
import { useToast } from "@chakra-ui/react";
import { type } from "os";
import { getNumberToText } from "util/numberToTextHas";

export default function App() {
  const { register, watch } = useForm({
    defaultValues: {
      number: 42,
    },
  });
  const toast = useToast();

  return (
    <div className="min-h-screen min-w-screen bg-embie-blue flex flex-col py-16 space-y-5 sm:space-y-10 text-center px-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl sm:text-6xl font-recoleta font-bold text-white">Bienvenue 🎉</h1>
      <h1 className="text-2xl sm:text-6xl ">🔢 ➡️ 💬</h1>
      <div className="h-full mt-32 mb-12">
        <div className="bg-white overflow-hidden shadow h-full rounded-lg sm:w-4/5 mx-auto">
          <div className="px-10 py-10 2xl:py-24 sm:p-6 space-y-5 ">
            <p className="text-center text-xl sm:text-2xl font-recoleta text-embie-blue sm:mt-10">
              Entrez un nombre ci-dessous pour le transcrire en français (🇧🇪) :{" "}
            </p>

            <input
              {...register("number")}
              className="p-5 max-w-2xl w-full sm:w-3/5 font-recoleta font-bold text-4xl text-center border-b-4 focus:ring-0 focus:outline-none focus:border-embie-purple text-embie-blue"
            />
            <div className="mt-80">
              {isNaN(watch("number")) || watch("number") === undefined || !watch("number") ? (
                <p className="text-center text-xl font-recoleta text-embie-blue">Veuillez entrer un nombre</p>
              ) : (
                <div className="space-y-10">
                  <p className="text-center text-xl max-w-2xl w-full sm:w-3/5 font-recoleta mx-auto ">
                    {_.capitalize(getNumberToText(watch("number")))}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-4 text-xl border border-transparent shadow-sm font-medium rounded-md text-embie-blue font-recoleta bg-embie-purple bg-opacity-70 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-embie-purple focus:ring-opacity-50"
                    onClick={() => {
                      navigator.clipboard.writeText(_.capitalize(convertNumberToText(watch("number"))));
                      toast({
                        title: "Texte copié",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                    }}
                  >
                    Copier
                    <ClipboardCopyIcon className="h-5 w-5 ml-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
