import { send } from "@emailjs/browser";
import { ConfirmarPresencaType } from "../../ConfirmarPresenca";

export async function sendEmail(data: ConfirmarPresencaType) {
  const templateParams = {
    from_name: data.name,
    presenca: data.confirmation === "true" ? "Sim" : "Não",
    acompanhantes_numero: data.companion,
    acompanhantes_nomes: data.companionNames,
  };

  const response = await send(
    "service_azqn024",
    "template_nxrle3u",
    templateParams,
    "1EIPXWAFBirZTXZhA"
  );

  if (response.status === 200) {
      return {data: true, message: response.status};
  } else {
    return {data: false, message: response.text}
  } 
}
