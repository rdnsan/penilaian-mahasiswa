import { useState } from 'react';
import { Button, Select, Terminal, UserIcon } from '../components';

type Penilaian = Record<string, Record<string, number>>;

export default function Home() {
  const [penilaian, setPenilaian] = useState<Penilaian>({});
  const [result, setResult] = useState<Penilaian>({});

  const labels = new Array(4)
    .fill('Aspek penilaian')
    .map((value, index) => `${value} ${index + 1}`);

  const students = new Array(10).fill('Mahasiswa').map((value, index) => `${value} ${index + 1}`);

  const options = new Array(10)
    .fill('')
    .map((_, i) => `${i + 1}`)
    .map((value) => ({ label: value, value }));

  const format = (text: string) => text.toLowerCase().split(' ').join('_');

  const handleChange = (aspek: string, mahasiswa: string, nilai: number) => {
    setPenilaian((prevPenilaian) => ({
      ...prevPenilaian,
      [aspek]: {
        ...(prevPenilaian[aspek] || {}),
        [mahasiswa]: nilai,
      },
    }));
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (value) handleChange(name.split('-')[0], name.split('-')[1], +value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(penilaian);
  };

  return (
    <>
      <header>
        <h1 className="py-6 text-center text-3xl font-bold">Aplikasi Penilaian Mahasiswa</h1>
      </header>
      <main>
        <div className="mx-auto mb-8 flex max-w-4xl flex-col justify-center gap-y-4 p-4">
          <form
            onSubmit={handleSubmit}
            onReset={() => {
              setPenilaian({});
              setResult({});
            }}
          >
            <div className="flex flex-col">
              <div className="flex flex-row justify-end gap-x-4 pr-4">
                {labels.map((label, i) => (
                  <p key={i} className="w-32 p-4 text-center">
                    {label}
                  </p>
                ))}
              </div>
              {students.map((student, idx) => (
                <div
                  key={Math.random().toString()}
                  className="mb-4 flex flex-row justify-between rounded border border-gray-300 bg-white p-4"
                >
                  <div className="flex items-center">
                    <UserIcon className="h-6 w-6 fill-gray-400" />
                    <p className="px-2">{student}</p>
                  </div>
                  <div className="flex gap-x-4">
                    {new Array(4).fill('').map((_, i) => (
                      <Select
                        key={i}
                        id={`aspek_penilaian_${i + 1}-${format(student)}`}
                        name={`aspek_penilaian_${i + 1}-${format(student)}`}
                        options={[{ label: 'Pilih', value: '' }, ...options]}
                        value={
                          penilaian[`aspek_penilaian_${i + 1}`]?.[`mahasiswa_${idx + 1}`] || ''
                        }
                        onChange={handleSelect}
                        wrapperClass="w-32"
                        aria-label={`Aspek penilaian ${i + 1} - ${student}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4 flex flex-auto justify-end space-x-4">
                <Button type="submit">Simpan</Button>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
              </div>
              <details>
                <summary className="mt-4 w-fit cursor-pointer py-3 pr-3 font-semibold">
                  <span className="pl-2 tracking-wider">Result</span>
                </summary>
                <div className="pt-2">
                  <Terminal command="console.log(result)">
                    <figure className="pb-2">
                      <pre>
                        <code>{JSON.stringify(result, null, 2)}</code>
                      </pre>
                    </figure>
                  </Terminal>
                </div>
              </details>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
