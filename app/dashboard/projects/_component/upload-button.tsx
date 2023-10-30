// import { PlusCircle } from 'lucide-react';

// import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// import { useDropzone } from 'react-dropzone';

// type UploadButtonProps = {
//   isModalOpen: boolean;
//   setIsModalOpen: (value: boolean) => void;
//   files: File[],
//   setFiles: (value: File[]) => void
// };

// const UploadButton = ({ isModalOpen, setIsModalOpen, files, setFiles }: UploadButtonProps) => {
//   return (
//     <Dialog
//       open={isModalOpen}
//       onOpenChange={(v) => {
//         if (!v) {
//           setIsModalOpen(v);
//         }
//       }}>
//       <DialogTrigger onClick={() => setIsModalOpen(true)} asChild>
//         <div className='w-[302px] h-[202px] flex-shrink-0 rounded-lg bg-primary/10 cursor-pointer flex flex-col justify-center items-center'>
//           <PlusCircle className='w-12 h-12 text-primary' />
//           <span className='text-base font-semibold text-primary'>Add New Image</span>
//         </div>
//       </DialogTrigger>
//       <DialogContent className='max-w-xl'>
//         <UploadDropzone files={files} setFiles={setFiles} />
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default UploadButton;

// type UploadDropzoneProps = {
//     files: File[],
//     setFiles: (value: File[]) => void;
// }

// function UploadDropzone ({files, setFiles}) {

//     const { getRootProps, getInputProps, open } = useDropzone({
//         accept: "image/*",
//         onDrop: (acceptedFiles) => {
//           setFiles(
//             acceptedFiles.map((file) =>
//               Object.assign(file, {
//                 preview: URL.createObjectURL(file)
//               })
//             )
//           );
//         }
//       });

//       const removeFile = (file:File) => () => {
//         const newFiles = [...files];
//         newFiles.splice(newFiles.indexOf(file), 1);
//         setFiles(newFiles);
//       };

//       const thumbs = files?.map((file:File) => (
//         <div style={thumb} key={file.name}>
//           <div style={thumbInner}>
//             <img src={file.preview} style={img} alt={file.name} />
//           </div>
//           <button onClick={removeFile(file)}>Remove File</button>
//         </div>
//       ));
//     return (

//     )
// }
