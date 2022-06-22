function Header_Report() {
  return (
    <div className="flex border-b border-black py-2">
      <div>
        <img src="/logo_SMK.png" width={120} />
      </div>
      <div className="ml-4 flex flex-col justify-center ">
        <h2 className="p-0 m-0 text-2xl font-bold">
          Sekolah Menengah Kejuruan Negeri 1 Sukamara
        </h2>
        <p className="p-0 m-0 text-left ">
          JL. CILIK RIWUT KM. 4, Mendawai, Kec. Sukamara, Kab. Sukamara Prov.
          Kalimantan Tengah
        </p>
      </div>
    </div>
  );
}

export default Header_Report;
