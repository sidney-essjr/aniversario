export default function CardapioComida() {
  return (
    <section className=" p-4 border-[1px] rounded-sm flex flex-col place-content-center place-items-center">
      <h2 className="text-xl font-bold">Cardápio food</h2>
      <ul className=" w-80 p-3 flex flex-col gap-y-2">
        <li><strong>Frios </strong>: salada tropical e salada verde</li>
        <li>
          <strong>Guarnições </strong>: salpicão de aves, farofa, arroz branco, arroz à grega,
          pene ao molho 4 queijos, batata noisette e batata palha
        </li>
        <li>
          <strong>Quentes </strong>: tatu ao molho madeira e cogumelos, strogonoff de frango,
          lombo ao molho barbecue e sobrecoxa desossada
        </li>
        <li><strong>Lanche da madrugada </strong>: batata frita e hambúrguer</li>
      </ul>
    </section>
  );
}
