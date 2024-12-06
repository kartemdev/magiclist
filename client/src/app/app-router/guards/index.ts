import MobileGuard from './mobile-guard';
import PrivateGuard from './private.gurad';
import PublicVerifeGuard from './public-verifie.guard';
import PublicGuard from './public.guard';

const Guard = {
  Mobile: MobileGuard,
  Private: PrivateGuard,
  Public: PublicGuard,
  PublicVerifie: PublicVerifeGuard,
};

export default Guard;
