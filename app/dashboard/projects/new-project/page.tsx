import PageWrapper from '@/components/ui/page-wrapper';
import ProjectCreateForm from '@/components/forms/project-create-form';

const NewProject = () => {
  return (
    <PageWrapper>
      <div className='container max-w-2xl'>
        <ProjectCreateForm />
      </div>
    </PageWrapper>
  );
};

export default NewProject;
