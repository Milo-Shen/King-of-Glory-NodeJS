// Import React Framework
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryLoader = () => {
  // variables
  const { type } = useParams();

  // Hooks
  const [module, set_module] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const module = await import('./Components/CreateCategory');
      set_module(module.default);
    })();
  }, [type]);

  return module;
};

export default CategoryLoader;
