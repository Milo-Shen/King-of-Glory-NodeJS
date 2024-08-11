// Import React Framework
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryLoader = () => {
  // variables
  const { type } = useParams();

  // Hooks
  const [module, set_module] = useState<React.FC>();

  useEffect(() => {
    (async () => {
      const module = await import('./Components/CreateCategory');
      set_module(module.default);
    })();
  }, [type]);

  return module;
};

export default CategoryLoader;
