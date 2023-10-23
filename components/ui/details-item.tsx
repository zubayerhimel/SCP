const DetailsItem = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <div className='flex gap-3'>
      <span className='text-sm text-gray-500'>{label} :</span>
      <span className='text-sm'>{value}</span>
    </div>
  );
};

export default DetailsItem;
